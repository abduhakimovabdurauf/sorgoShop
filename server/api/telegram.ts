export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event)

  const TELEGRAM_BOT_TOKEN = '7522825165:AAGuvkNDl3Pascn0SGpVsAIyH0DJ1ZIVa1U'
  const CHAT_ID = '-4880033166'

  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: body.text,
      parse_mode: 'Markdown'
    })
  })

  const data = await res.json()
  return data
})