# Mikroservis Mimarisi Kullanarak React ve Node.js ile Etkileşimli Uygulama

Bu proje, mikroservis mimarisi kullanarak oluşturulmuş etkileşimli bir uygulamayı içerir. React ve Node.js kullanılarak geliştirilmiştir ve olay veri yayılımı (event bus) kullanılarak mikroservisler arasında iletişim sağlanmaktadır.

# Proje Hakkında

Bu proje, kullanıcıların makaleler oluşturabileceği, yorum yapabileceği ve bu içerikler arasında etkileşimde bulunabileceği bir uygulamayı içermektedir. Uygulama, aşağıdaki bileşenleri içermektedir:

client-reactjs: Kullanıcı arayüzünün oluşturulduğu React uygulaması.

posts: Makale oluşturma ve listeleme işlemlerini gerçekleştiren Node.js mikroservisi.

comments: Yorum oluşturma ve listeleme işlemlerini gerçekleştiren Node.js mikroservisi.

event-bus: Olay veri yayılımını sağlayan Node.js mikroservisi.

query: Veri sorgulama ve okuma işlemlerini gerçekleştiren Node.js mikroservisi.

# Nasıl Çalıştırılır

Proje dosyalarını yerel bilgisayarınıza indirin.

Terminali açın ve her bir mikroservis klasörüne gidin (client-reactjs, posts, comments, event-bus, query).

Her bir mikroservis klasöründe ayrı terminaller açarak aşağıdaki adımları takip edin:

npm install (Gerekli bağımlılıkların yüklenmesi)

npm start (Uygulamanın başlatılması)

Tarayıcınızda http://localhost:3000 adresine gidin ve uygulamayı görüntüleyin.



# Katkıda Bulunma

Her türlü katkı ve geri bildirimleriniz bu projeyi geliştirmek için çok değerlidir. Herhangi bir sorunuz veya öneriniz varsa, lütfen issue açarak bana bildirin.

#  Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
