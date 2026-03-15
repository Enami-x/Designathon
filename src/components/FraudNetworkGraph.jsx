import { useMemo, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { mockNetworkLinks, mockNetworkNodes } from '../data/mockData.js';
import { severityColors } from '../utils/format.js';

export default function FraudNetworkGraph({ onNodeClick, className }) {
  const fgRef = useRef(null);

  const data = useMemo(
    () => ({
      nodes: mockNetworkNodes,
      links: mockNetworkLinks
    }),
    []
  );

  return (
    <div
      className={`h-full flex flex-col rounded-lg border border-border-subtle bg-[#161922] p-4 overflow-hidden ${className || ''}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-white">Network Graph</div>
        <div className="text-xs text-gray-500">Click red/amber nodes</div>
      </div>
      <div className="flex-1 bg-[#0F1117] rounded-md overflow-hidden border border-border-subtle">
        <ForceGraph2D
          ref={fgRef}
          graphData={data}
          backgroundColor="#0F1117"
          nodeAutoColorBy="severity"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const color =
              node.severity === 'CRITICAL'
                ? severityColors.CRITICAL
                : node.severity === 'HIGH'
                ? severityColors.HIGH
                : node.severity === 'MEDIUM'
                ? severityColors.MEDIUM
                : '#6B7280';
            const size = 4 + (node.riskScore || 0) / 10;
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();

            const fontSize = 10 / globalScale;
            ctx.font = `${fontSize}px Inter`;
            ctx.fillStyle = '#d1d5db';
            ctx.textAlign = 'center';
            ctx.fillText(label, node.x, node.y - size - 4);
          }}
          linkColor={() => '#1E2235'}
          linkWidth={1}
          onNodeClick={(node) => {
            if (node.type === 'transaction') {
              onNodeClick?.(node.id);
            }
          }}
        />
      </div>
    </div>
  );
}
