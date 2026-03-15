// سكربت بسيط لإرسال طلب HTTP
const url = 'https://ofoqvideo.web.app/'; // استبدل هذا برابط السيرفر الذي تريد إيقاظه

async function wakeUp() {
    try {
        console.log('جاري محاولة إيقاظ السيرفر...');
        const response = await fetch(url);
        console.log('تم إرسال الطلب بنجاح! الحالة:', response.status);
    } catch (error) {
        console.error('حدث خطأ أثناء إرسال الطلب:', error.message);
    }
}

wakeUp();
