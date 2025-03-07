#include <WiFi.h>
#include <WebSocketsClient.h>

const char* ssid = "APRENDIZ";      
const char* password = "Sena2025**"; 

WebSocketsClient webSocket;

#define LDR_PIN A0    // Pin del fotoresistor
#define LED_PIN 5     // Pin del LED

void setup() {
    Serial.begin(115200);
    
    pinMode(LED_PIN, OUTPUT);
    
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\n✅ Conectado a WiFi");

    webSocket.begin("192.168.1.100", 8000, "/ws/sensor/1/");  
    webSocket.onEvent(webSocketEvent);
    webSocket.setReconnectInterval(5000);
}

void loop() {
    webSocket.loop();  

    int ldrValue = analogRead(LDR_PIN);  
    Serial.println("📡 Luz: " + String(ldrValue));

    String mensaje = "{\"action\":\"update_sensor\",\"sensor_id\":1,\"valor\":" + String(ldrValue) + "}";
    webSocket.sendTXT(mensaje);

    if (ldrValue < 500) {
        digitalWrite(LED_PIN, HIGH);
    } else {
        digitalWrite(LED_PIN, LOW);
    }

    delay(1000);
}

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {
    switch (type) {
        case WStype_DISCONNECTED:
            Serial.println("❌ Desconectado del WebSocket");
            break;
        case WStype_CONNECTED:
            Serial.println("✅ Conectado al WebSocket");
            break;
        case WStype_TEXT:
            Serial.printf("📩 Mensaje recibido: %s\n", payload);
            break;
    }
}

