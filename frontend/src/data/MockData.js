export const TABS = [
  { id: 1, name: "collaborate.js", color: "#e5c07b", lang: "javascript" },
  { id: 2, name: "utils.ts",       color: "#61afef", lang: "typescript" },
  { id: 3, name: "styles.css",     color: "#98c379", lang: "css" },
];
 
export const FILE_TREE = [
  { type: "folder", name: "src", depth: 0, open: true },
  { type: "file",   name: "collaborate.js", depth: 1, active: true,  color: "#e5c07b" },
  { type: "file",   name: "utils.ts",       depth: 1, active: false, color: "#61afef" },
  { type: "file",   name: "hooks.js",       depth: 1, active: false, color: "#e5c07b" },
  { type: "folder", name: "styles", depth: 0, open: false },
  { type: "file",   name: "styles.css",     depth: 1, active: false, color: "#98c379" },
  { type: "file",   name: "README.md",      depth: 0, active: false, color: "#9CA3AF" },
];
 
export const USERS = [
  { name: "Aman",  initial: "A", color: "#8B5CF6", status: "typing",  you: true  },
  { name: "Sarah", initial: "S", color: "#EC4899", status: "online",  you: false },
  { name: "Raj",   initial: "R", color: "#22C55E", status: "online",  you: false },
];
 
export const MESSAGES = [
  { id: 1, user: "Sarah", color: "#EC4899", text: "Should we extract the sync logic to a hook?", mine: false, time: "2m" },
  { id: 2, user: "Aman",  color: "#8B5CF6", text: "Good idea — useCollabSync would be cleaner.", mine: true,  time: "1m" },
  { id: 3, user: "Raj",   color: "#22C55E", text: "I'll start on that. Give me 5 mins 🚀",        mine: false, time: "just now" },
];
 
export const TERMINAL_LINES = [
  { text: "$ npm run dev",                                  color: "#6B7280" },
  { text: "  ▸ Starting development server...",             color: "#6B7280" },
  { text: "  ✓ Compiled successfully in 324ms",             color: "#22C55E" },
  { text: "  ✓ Server running at http://localhost:3000",     color: "#22C55E" },
  { text: "",                                                color: "" },
  { text: "$ node collaborate.js",                          color: "#6B7280" },
  { text: "  CollabIDE session started 🚀",                  color: "#a78bfa" },
  { text: "  Syncing with 3 collaborators...",               color: "#6B7280" },
  { text: "  ✓ All clients connected",                       color: "#22C55E" },
  { text: "$ _",                                             color: "#6B7280" },
];
 
export const DEFAULT_CODE = `// collaborate.js — CollabIDE Room Session
// Real-time collaboration via WebSocket + CRDT
 
import { createRoom, syncDelta } from './utils';
 
const room = createRoom({
  id: 'abc-xyz-123',
  language: 'javascript',
  theme: 'one-dark',
});
 
/**
 * Invite collaborators and start live editing
 */
async function startSession(users) {
  await room.connect();
 
  room.onUserJoin((user) => {
    console.log(\`\${user.name} joined the session\`);
    renderCursor(user);
  });
 
  room.onEdit((delta, user) => {
    syncDelta(delta);
    highlightLine(delta.line, user.color);
  });
 
  return room;
}
 
// Bootstrap
startSession([
  { name: 'Aman',  color: '#8B5CF6' },
  { name: 'Sarah', color: '#EC4899' },
  { name: 'Raj',   color: '#22C55E' },
]);
`;