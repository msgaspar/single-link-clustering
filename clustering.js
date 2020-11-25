const fs = require('fs');
const readline = require('readline');

async function greedyClustering(filename, k) {
  const readStream = fs.createReadStream(__dirname + `/${filename}`);
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  let data;
  let nPoints;

  for await (const line of rl) {
    const splitline = line.split(' ').map(i => Number(i));

    if (splitline.length === 1) {
      nPoints = splitline[0];
      data = new Array();
    } else {
      data.push(splitline);
    }
  }

  data.sort((a, b) => a[2] - b[2]);

  const clusters = {};
  for (let i = 1; i <= nPoints; i++) {
    clusters[i] = [i];
  }

  const pointsClusters = [];
  for (let i = 1; i <= nPoints; i++) {
    pointsClusters[i] = i;
  }

  let clusterA;
  let clusterB;

  while (Object.keys(clusters).length > k) {
    const nextUnion = data.shift();
    const [pointA, pointB] = nextUnion;

    clusterA = pointsClusters[pointA];
    clusterB = pointsClusters[pointB];

    if (clusterA === clusterB) {
      continue;
    }

    const newCluster = [...clusters[clusterA], ...clusters[clusterB]];

    clusters[clusterB].forEach(point => {
      pointsClusters[point] = clusterA;
    });

    delete clusters[clusterA];
    delete clusters[clusterB];
    clusters[clusterA] = [...newCluster];
  }

  let maxSpacing;

  do {
    const [pointA, pointB, distance] = data.shift();
    clusterA = pointsClusters[pointA];
    clusterB = pointsClusters[pointB];
    maxSpacing = distance;
  } while (clusterA === clusterB);

  console.log(`Max. spacing of the clustering: ${maxSpacing}`);
}

greedyClustering('clustering-input.txt', 4);
