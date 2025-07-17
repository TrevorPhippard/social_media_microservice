import express, { Request, Response } from "express";
import { Client } from "@elastic/elasticsearch";

const client = new Client({ node: "http://elasticsearch:9200" });
const app = express();
app.use(express.json());

interface IndexRequestBody {
  id: string;
  content: string;
}

interface SearchQuery {
  q?: string;
}

app.post(
  "/index",
  async (req: Request<{}, {}, IndexRequestBody>, res: Response) => {
    const { id, content } = req.body;

    if (!id || !content) {
      return res.status(400).json({ error: "id and content are required" });
    }

    await client.index({
      index: "posts",
      id,
      document: { content },
    });

    res.send({ status: "indexed" });
  }
);

app.get(
  "/search",
  async (req: Request<{}, {}, {}, SearchQuery>, res: Response) => {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Missing search query" });
    }

    const result = await client.search({
      index: "posts",
      query: { match: { content: q } },
    });

    res.send(result.hits.hits);
  }
);

app.listen(4005, "0.0.0.0", () => {
  console.log("User service running on port 4005");
});
