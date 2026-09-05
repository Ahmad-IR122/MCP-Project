import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "MCP-Project",
  version: "1.0.0",
})

server.tool(
  "get_trip",
  "Get information about a trip",
  {
    destination: z.string(),
  },
  async ({ destination }) => {
  return {
      content: [
        {
          type: "text",
          text: `Your trip to ${destination} is ready.`,
        },
      ],
    };
  }
)

const transport = new StdioServerTransport();

await server.connect(transport);