import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  // Gemini API istemcisi yapılandırma
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY); // API anahtarınızı kullanın
  const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Modeli belirtin (gemini-pro veya gemini-pro-vision)

  const evaluationPrompt = `
    Lütfen aşağıdaki girişim fikrini verilen kriterlere göre değerlendir ve her bir kriter için puanını (1-10 arası) ve nedenini belirt. Ayrıca toplam puanı da hesapla.

    Kriterler:
    1. Pazar İhtiyacı
    2. Benzersizlik ve Rekabet Avantajı
    3. İş Modeli ve Gelir Potansiyeli
    4. Yönetim ve Ekip Yetenekleri
    5. Finansal Durum ve Kaynaklar
    6. Pazar Girişi ve Pazarlama Stratejisi
    7. Sürdürülebilirlik ve Uzun Vadeli Büyüme Potansiyeli
    8. Teknolojik Yenilik ve Altyapı
    9. Hukuki ve Regülasyon Uyumu
    10. Müşteri Geri Bildirimleri ve Pazar Testi

    Girişim Fikri: ${prompt}
  `;

  try {
    const result = await model.generateContent(evaluationPrompt);
    const responseText = result.response.text();

    res.status(200).json({ result: responseText });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: error.message || "Gemini API'de bir hata oluştu." });
  }
}
