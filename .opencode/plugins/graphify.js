// nodesify-graphify OpenCode plugin
import { existsSync } from "fs";
import { join } from "path";

export const GraphifyPlugin = async ({ directory }) => {
  let reminded = false;
  return {
    "tool.execute.before": async (input, output) => {
      if (reminded) return;
      if (!existsSync(join(directory, ".graphify", "graph.json"))) return;
      if (input.tool === "bash") {
        output.args.command =
          'echo "[nodesify-graphify] Knowledge graph available. Read .graphify/graph_report.md for architecture context." && ' +
          output.args.command;
        reminded = true;
      }
    },
  };
};
