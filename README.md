# React Redux Spend Bill Gates Money Clone App
## Yayınlandı: https://dainty-biscotti-9cbfe7.netlify.app/

## Ürün alınmamışsa satılmamaktadır. Para miktarı bitince yeni ürün eklenmemektedir. Kendimiz rakam ile kaç tane alacağımızı belirleyebiliriz. 
![bill4](https://user-images.githubusercontent.com/36435160/187640428-384ec615-7c86-41e8-961e-2cf89e51d60b.png)

## Butonlar içerisinde para miktarı aşmaması ve 0 altına inmeme koşulu verilmiştir. Buy veya sell butonlarına tıklandığında redux increment ve decrement ile karşılanmaktadır. input sayı girildiğinde girilen miktar redux quantityUpdate ile karşılanmaktadır.
![bill1](https://user-images.githubusercontent.com/36435160/187640900-d28809c9-8354-48ca-84d8-cdb6fb19cb40.png)

## initial değerler belirtilmiştir. Reducer increment kullanımında Buy butona tıklandığında ilgili ürün id ile bulunur. initial state değeri 1 artırılır. Tüm ürünlerin fiyatı ve miktarları map ile  çarpılır. Geçici verdiğim totalCostMoney değerinden düşülür. Bu değer initial değere eşitlenir.
![bill2](https://user-images.githubusercontent.com/36435160/187641488-9830a475-631d-4773-9326-00d62d941376.png)

## decrement kullanımında sell butonuna tıklanır ve burada karşılanır. Tıklanan ürün id ile initial değerlerdeki id eşleşir. Quantity 1 azalır. Geçici para değeri verilir. Tüm ürünlerin fiyat ve miktarları çarpılıp geçici değerden düşülür. Geçici değer initial değere eşitlenir. quantityUpdate aynı şekilde inputa girilen değer karşılanır.
![bill3](https://user-images.githubusercontent.com/36435160/187642257-4e6ae4be-0347-40c7-97fa-5f45df0a2e7a.png)
