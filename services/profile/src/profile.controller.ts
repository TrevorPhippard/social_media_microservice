import express, { Request, Response } from "express";
import {
  createProfile,
  getProfile,
  updateProfile,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} from "./profile.service";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, bio, avatarUrl } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const profile = await createProfile({ userId, bio, avatarUrl });
    res.status(201).json(profile);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message || "Failed to create profile" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) return res.status(400).json({ error: "Invalid userId" });

    const profile = await getProfile(userId);

    if (!profile) return res.status(404).json({ error: "Profile not found" });

    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

router.put("/:userId", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const { bio, avatarUrl } = req.body;
    if (isNaN(userId)) return res.status(400).json({ error: "Invalid userId" });

    const updated = await updateProfile(userId, { bio, avatarUrl });
    res.json(updated);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message || "Failed to update profile" });
  }
});

router.post(
  "/:userId/follow/:targetId",
  async (req: Request, res: Response) => {
    try {
      const followerId = parseInt(req.params.userId);
      const followingId = parseInt(req.params.targetId);
      if (isNaN(followerId) || isNaN(followingId)) {
        return res.status(400).json({ error: "Invalid userId or targetId" });
      }

      await followUser(followerId, followingId);
      res.status(201).json({ message: "Followed user" });
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to follow user" });
    }
  }
);

router.delete(
  "/:userId/unfollow/:targetId",
  async (req: Request, res: Response) => {
    try {
      const followerId = parseInt(req.params.userId);
      const followingId = parseInt(req.params.targetId);
      if (isNaN(followerId) || isNaN(followingId)) {
        return res.status(400).json({ error: "Invalid userId or targetId" });
      }

      await unfollowUser(followerId, followingId);
      res.json({ message: "Unfollowed user" });
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error.message || "Failed to unfollow user" });
    }
  }
);

router.get("/:userId/followers", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) return res.status(400).json({ error: "Invalid userId" });

    const followers = await getFollowers(userId);
    res.json(followers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch followers" });
  }
});

router.get("/:userId/following", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) return res.status(400).json({ error: "Invalid userId" });

    const following = await getFollowing(userId);
    res.json(following);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch following" });
  }
});

export default router;
