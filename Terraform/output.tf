# -------------------------
# CLUSTER DETAILS
# -------------------------

output "cluster_name" {
  description = "EKS Cluster Name"
  value       = aws_eks_cluster.eks_cluster.name
}

output "cluster_endpoint" {
  description = "EKS Cluster Endpoint"
  value       = aws_eks_cluster.eks_cluster.endpoint
}

output "cluster_arn" {
  description = "EKS Cluster ARN"
  value       = aws_eks_cluster.eks_cluster.arn
}

# -------------------------
# NODE GROUP DETAILS
# -------------------------

output "node_group_name" {
  description = "EKS Node Group Name"
  value       = aws_eks_node_group.eks_node_group.node_group_name
}

output "node_group_arn" {
  description = "EKS Node Group ARN"
  value       = aws_eks_node_group.eks_node_group.arn
}

# -------------------------
# IAM ROLES
# -------------------------

output "eks_cluster_role_arn" {
  description = "IAM Role used by EKS Cluster"
  value       = aws_iam_role.eks_role.arn
}

output "eks_node_role_arn" {
  description = "IAM Role used by Node Group"
  value       = aws_iam_role.eks_node_role.arn
}

# -------------------------
# NETWORK INFO
# -------------------------

output "vpc_id" {
  description = "VPC ID used by EKS"
  value       = data.aws_vpc.default_vpc.id
}

output "subnet_ids" {
  description = "Subnets used by EKS"
  value       = data.aws_subnets.default_subnets.ids
}