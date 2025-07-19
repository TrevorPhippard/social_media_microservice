import prisma from "./prismaClient";

export interface ProfileData {
  userId: number;
  bio?: string;
  avatarUrl?: string;
}

export async function createProfile(data: ProfileData) {
  return await prisma.profile.create({ data });
}

export async function getProfile(userId: number) {
  return await prisma.profile.findUnique({ where: { userId } });
}

export async function updateProfile(
  userId: number,
  data: Partial<ProfileData>
) {
  return await prisma.profile.update({ where: { userId }, data });
}

export async function followUser(followerId: number, followingId: number) {
  if (followerId === followingId) {
    throw new Error("Cannot follow yourself");
  }
  return await prisma.follower.create({
    data: {
      followerId,
      followingId,
    },
  });
}

export async function unfollowUser(followerId: number, followingId: number) {
  return await prisma.follower.deleteMany({
    where: { followerId, followingId },
  });
}

export async function getFollowers(userId: number) {
  return await prisma.follower.findMany({
    where: { followingId: userId },
    include: { follower: true },
  });
}

export async function getFollowing(userId: number) {
  return await prisma.follower.findMany({
    where: { followerId: userId },
    include: { following: true },
  });
}
