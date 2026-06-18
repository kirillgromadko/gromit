import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const channelId = process.env.TELEGRAM_CHANNEL_ID;

    if (!token || !channelId) {
      return NextResponse.json(
        { error: "Telegram not configured" },
        { status: 500 }
      );
    }

    const text = `📋 *Новая заявка с сайта*

👤 Имя: ${name}
📱 Телефон: ${phone}
💬 Комментарий: ${message || "Без комментария"}

🌐 gromitstroy.by`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: channelId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
