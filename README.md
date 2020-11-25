# Single-Link Clustering

Single-link clustering is based on grouping clusters in bottom-up fashion (agglomerative clustering), at each step combining two clusters that contain the closest pair of elements not yet belonging to the same cluster as each other. It is one of the most basic algorithms for unsupervised learning, in machine learning and statistics.

The main idea in _bottom-up_ or _agglomerative_ clustering is to begin with every data point in its own cluster, and then successively merge pairs of clusters until exactly _k_ remain.

## Greedy approach

The generic bottom-up clustering algorithm does not specify which pair of clusters to merge in each iteration. If we define a similarity function _F_ for pairs of clusters, which can be derived from the similarity function _f_ for pairs of data points, the generic algorithm can be specialized to greedily merge the "most similar" pair of clusters in each iteration.

Single-link clustering refers to greedy bottom-up clustering with the best-case similarity function. This way, this algorithm corresponds to the Kruskal's algorithm for computing the minimum spanning tree of a given graph, with vertices substituting for data points and connected components for clusters. The one difference is that single-link clustering stops once there are _k_ clusters, while Kruskal's algorithm continues until only one connected component remains.

## The problem

The input file describes a distance function equivalent to a complete graph with edge costs. For example, the third line of the file is "1 3 5250", indicating that the distance between nodes 1 and 3 (equivalently, the cost of the edge (1,3)) is 5250. You can assume that distances are positive, but you should NOT assume that they are distinct.

Your task in this problem is to run the clustering algorithm on this data set, where the target number _k_ of clusters is set to 4. What is the maximum spacing of a 4-clustering?

## References

The text and the problem presented here were based in the book [Algorithms Illuminated](http://algorithmsilluminated.org) by Tim Roughgarden.
