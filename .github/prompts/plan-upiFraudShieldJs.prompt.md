## Plan: UPI FraudShield UI (React/JS/Tailwind)

Build a single-page React 18 + JavaScript + Tailwind app (no backend) for a fraud dashboard. All mock data lives in src/data/mockData.js; App.jsx holds shared state (activeView, selectedAlert, drawerOpen, alert feed mutations). Two views (analyst, executive) share components; interactions wire alerts/network clicks to open the transaction drawer.

**Steps**
1. Scaffold project (Vite React JS) and deps: tailwind + postcss + autoprefixer; framer-motion; recharts; react-force-graph-2d; classnames/clsx; install Inter via CSS import. No TypeScript configs needed.
2. Configure Tailwind: add custom colors (fraud-bg, card-dark, border-subtle, grid-line), global styles in src/index.css (body bg/text, font Inter, scrollbars), enable dark background defaults.
3. Add mock data file src/data/mockData.js with provided datasets; create a simple helpers file src/utils/format.js (currency formatter, severity color map) if useful.
4. App state in src/App.jsx: manage activeView ('analyst' | 'executive'), selectedAlert (object or null), drawerOpen (boolean), alertFeed (array), flaggedIds (Set) to mark flag icon; handler to open drawer on alert click/node click; close/clear handler; markSafe removes alert with animation; flag toggles flagged state; pass handlers to children.
5. Layout shell: main background fraud-bg, padding/grid. Place Navbar at top; grid below for metrics + charts + feed + network. Analyst view: show metric tiles, live alert feed, risk distribution bar chart, SHAP panel, transaction drawer, network graph, trend/baseline charts as appropriate. Executive view: reuse metrics and trend/baseline emphasis, hide drawer/feed or simplify (still allow alert drill-down from a summary list if included).
6. Components (JSX):
   - Navbar.jsx: title left; analyst/executive toggle buttons using framer-motion for bg transition; props for activeView + setter.
   - MetricTile.jsx: card-dark background, left border colored, bold number/label, optional subtitle.
   - LiveAlertFeed.jsx: scroll list with AnimatePresence; severity badges colored; selected highlight border; onClick -> onAlertClick.
   - RiskScoreChart.jsx: Recharts BarChart over risk distribution; colors per bucket; grid stroke grid-line.
   - ShapPanel.jsx: shows transactionId; horizontal bars with direction-based color/orientation; anchor rule box with purple left border.
   - FraudNetworkGraph.jsx: force graph with node sizing/color by severity; on transaction node click -> open drawer via onNodeClick.
   - TransactionDrawer.jsx: motion slide-in from right; shows metadata grid, semicircle gauge (SVG), SHAP snippet if needed, buttons Flag for Review / Mark as Safe wired to handlers; close button clears selection.
   - Optional TrendChart.jsx / BaselineChart.jsx: Recharts Area/Line charts using mockTrendData & mockBaselineData (baseline variability), colors purple/blue; include tooltips/legends.
7. Styling/UX polish: consistent color system; cards with border-subtle; hover states; subtle motion on cards; severity badge mapping; currency formatting with ₹; ensure responsive grid (two-column desktop, single-column mobile) and consistent spacing.
8. Wire interactions end-to-end: navbar toggles view; alert row/node clicks set selection + open drawer; close clears selection; Flag toggles icon on badge; Mark as Safe removes alert from feed and, if selected, closes drawer; ensure state updates propagate to feed and drawer.

**Relevant files**
- package.json — scripts and dependencies
- tailwind.config.js / postcss.config.js — Tailwind setup with custom colors
- src/main.jsx, src/index.css — app mount, global styles, font import
- src/data/mockData.js — provided mock datasets
- src/App.jsx — shared state and layout, view switching, handlers
- src/components/Navbar.jsx — title + view toggle
- src/components/MetricTile.jsx — metric cards
- src/components/LiveAlertFeed.jsx — alert list with animations
- src/components/RiskScoreChart.jsx — bar chart
- src/components/ShapPanel.jsx — SHAP bars + anchor rule
- src/components/FraudNetworkGraph.jsx — force graph
- src/components/TransactionDrawer.jsx — detail drawer with actions
- src/components/TrendChart.jsx, src/components/BaselineChart.jsx — trend/baseline visuals (if separated)
- src/utils/format.js — helpers (format currency, severity color maps)

**Verification**
1. npm run dev — app loads with dark theme, all cards render.
2. Toggle Analyst/Executive switches layout without errors.
3. Clicking alert row highlights selection and opens drawer; close button hides drawer.
4. Clicking critical/high node in network graph opens drawer for that transaction.
5. Flag for Review shows 🚩 on that alert; Mark as Safe removes alert with fade-out animation and updates drawer state.
6. Charts render with correct colors and mock data (risk distribution bars, trend/baseline lines, network graph nodes sized by riskScore).

**Decisions**
- Use Vite React JS scaffold for fast setup.
- Keep all shared state in App.jsx as requested; no context/redux.
- Executive view will reuse components but emphasize metrics + trend/baseline; drawer may be hidden unless an alert is selected from feed/summary.
