export const connectWebSocket = (onMessage: (data: any) => void) => {
  const socket = new WebSocket("ws://localhost:4000");

  socket.onopen = () => {
    console.log("✅ Conectado al WebSocket");
  };

  socket.onmessage = (event) => {
    console.log("📩 Mensaje recibido:", event.data);
  };

  socket.onerror = (error) => {
    console.error("❌ Error en WebSocket:", error);
  };

  socket.onclose = () => {
    console.log("🔴 Conexión cerrada");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  return socket;
};
