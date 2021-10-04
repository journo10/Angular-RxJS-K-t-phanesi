import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  combineLatest,
  concat,
  defer,
  forkJoin,
  from,
  fromEvent,
  generate,
  iif,
  interval,
  merge,
  Observable,
  of,
  partition,
  race,
  range,
  ReplaySubject,
  Subject,
  throwError,
  timer,
  zip,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { audit, auditTime, debounce, debounceTime, distinct, elementAt, filter, first, ignoreElements, last, map, mapTo, sample, sampleTime, single } from 'rxjs/operators';
@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css'],
})
export class RxJsComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
   //Component ayağa kalktıktan sonra tetiklenen metodtur.
  //  const obs0 =fromEvent(this.txt.nativeElement,"keyup");
  //  obs0.pipe(debounce(x=>interval(500))).subscribe((a)=>{
  //    console.log(a);
  //  })
  //22.operatörü örneği.
  }

  // @ViewChild("txt")
  //     txt!:ElementRef //Burası 22.operatörün eylemi için yazıldı burası ve yukarıdaki ngAfterViewInit kısmı.

  ngOnInit(): void {
    //ngOnInit => Component oluşturulurken, ayağa kalkmadan önce tetiklenen metodtur.

    //Observable =>Gözlemlenebilir. observer =>gözlemleyen
    //hangi tip(any,number,string vs) yazdıysan nexte onu göndermen lazım
    //const observable = new Observable<number>((data) => {
    //data.next(5);
    //data.next(7);
    //data.next(11);
    //data.complete(); //veri akışının sonlandığını bildirmek için
    //});
    //observable.subscribe((a) => {
    //console.log(a);
    //});

    //********************************************//
    //SUBJECT =>Birden fazla observer'ın bir observable'a abone olması durumudur.Özelleştirilmiş observable denebilir.
    //  const subject = new Subject<any>();
    //  subject.subscribe(data =>{ console.log('ObserverA',data)});
    //  subject.subscribe(data =>{ console.log('ObserverB',data)});
    //  subject.next(5);
    //  subject.next(7);
    //  subject.subscribe(data =>{ console.log('ObserverC',data)});
    //  subject.next(9);
    //  subject.next(11);
    //  subject.next('GAZETECİLİK');

    //SUBJECT TÜRLERİ
    //1-BehaviorSubject => Akışa abone olan observer'ın akıştaki bir önceki veriyi alıp devam eder.

    //  let x:any = 'AKİF'
    //  const subject = new BehaviorSubject<any>(x);
    //  subject.subscribe(data =>{ console.log('ObserverA',data)});
    //  subject.subscribe(data =>{ console.log('ObserverB',data)});
    //  subject.next(5);
    //  subject.next(7);
    //  subject.subscribe(data =>{ console.log('ObserverC',data)});
    //  subject.next(9);
    //  subject.next(11);
    //  subject.next('GAZETECİLİK');

    //2-ReplaySubject => Akışta abone olan observer'ın akıştaki istediği veriyi alıp devam eder.

    // const subject = new ReplaySubject<any>(2);
    // subject.subscribe(data =>{ console.log('ObserverA',data)});
    // subject.subscribe(data =>{ console.log('ObserverB',data)});
    // subject.next(5);
    // subject.next(7);
    // subject.subscribe(data =>{ console.log('ObserverC',data)});
    // subject.next(9);
    // subject.next(11);
    // subject.next('GAZETECİLİK');

    //3-AsyncSubject => Akışta abone olan observer'ın akıştaki sonuncu veriyi alıp devam eder ve complete() fonksiyonun tetiklenmesini bekler.

    // const subject = new AsyncSubject<any>();
    // subject.subscribe(data =>{ console.log('ObserverA',data)});
    // subject.subscribe(data =>{ console.log('ObserverB',data)});
    // subject.next(5);
    // subject.next(7);
    // subject.subscribe(data =>{ console.log('ObserverC',data)});
    // subject.next(9);
    // subject.next(11);
    // subject.complete();
    // subject.next('GAZETECİLİK');

    //********************* RxJS OPERATÖRLERİ *********************** //

    //***1-AJAX Oparatörü =>Herhangi bir endpoint'e yapılan bir istek neticesinde gelen sonuçları Observable olarak döndüren fonksiyondur.
    // ajax.getJSON('https://jsonplaceholder.typicode.com/posts').subscribe((a)=>{
    //   console.log(a);//1.yol
    // })

    // ajax('https://jsonplaceholder.typicode.com/posts').subscribe((a)=>{
    //   console.log(a);//2. yol ajaxresponse olarak dönecek.
    // })

    // ajax({
    //   url:'https://jsonplaceholder.typicode.com/posts',
    //   method:'post'
    // })//post metodu.

    //Not bu oparetör çok kullanılımıyor.onun yerine Angular http client kullanılıyor.

    //***2-DEFER Operatörü => Bir observer subscribe olana kadar bekler ve olunduktan sonra bir Observable oluşturur.
    // const obj1 = of(new Date());
    // const obj2 = defer(()=>of(new Date()));

    // timer(5000).subscribe((a)=>{
    //   obj1.subscribe((d)=>{console.log(d)});
    //   obj2.subscribe((d)=>{console.log(d)});
    // })

    //***3-FROM Operatörü => Herhangi bir diziyi alıpgeriye Observable döndüren bir operatördür.
    // const sayilar =[3,5,7,11];
    // const obs =from(sayilar);
    // obs.subscribe((a)=>{
    //   console.log(a);
    // })

    // const araclar = new Map<string,number>();
    // araclar.set('BMW',5);
    // araclar.set('Audi',3);
    // araclar.set('Bugatti',11)
    // const obs = from(araclar);
    // obs.subscribe((a)=>{console.log(a)});

    //***4-fromEvent Operatörü => Herhangi bir nesnenin belirtilen event'ini yakalayarak Oberservable nesnesini olarak sunan operatördür.
    // const button =document.getElementsByClassName('btn')[0];
    // const obs =fromEvent(button,'click');
    // obs.subscribe((a)=>{console.log(a)});

    //***5-Generate Operatörü => Verielen şarta göre döngü oluşturarak Observable döndüren bir operatördür.
    // const obs = generate( 99, (x) => x > 0, (x) => (x = x - 3));
    // obs.subscribe((a)=>{console.log(a)});

    //***6-İnterval Operatörü => Belirtilen sayısal değere karşılık gelen zaman aralığında periyot oluşturan bir operatördür.
    // const obs =interval(3000);
    // obs.subscribe((a)=>{console.log('AKİF',a)});

    //***7- Of Operatörü => Verilen herhangi bir türden değerleri Observable nesnesine dönüştürür.
    // const obs = of(3,5,7,'AKİF',[true,false]);
    // obs.subscribe((a)=>console.log(a));

    //***8-range Operatörü => Belirtilen aralıkta dizisel değer yayan Observable nesnesini döndürür.
    // const obs = range(200,55);
    // obs.subscribe((a)=>console.log(a));

    //***9-throwError Operatörü => Hiçbir öğe barındırmayan ve bir hata fırlatan Observable oluşturur.
    // throwError(new Error('Bir hata oluştu...')).subscribe((a)=>{
    //   console.log(a);
    // })

    //***10- timer Operatörü => Milisaniye cinsinden belirtilen süre kadar sonra akışı yayacak olan Observable nesnesi döndürür.
    // timer(3000,400).subscribe((a)=>
    //            {console.log('Hello AKİF',a)});

    //***11-iif Operatörü => İki Observable arasında şarta bağlı seçim yapar.
    // let state: boolean = true;
    // const obs = iif(() => state, of(3, 5, 7), of(9, 11, 15));
    // obs.subscribe((a) => {console.log(a);});
    // state=false;
    // obs.subscribe((a)=>{console.log(a)});

    //***12-CombineLatest Operatörü =>Verielen tüm Observable'ların akıştaki en sonuncu değerlerini yakalayarak bir kombinasyaon yaratan operatördür.
    // const obs1 = timer(9000,1000);
    // const obs2 = timer(6000,1000);
    // const obs3 =timer(3000,1000);

    // const comb = combineLatest(obs1,obs2,obs3);
    // comb.subscribe((a)=>{console.log(a)});

    //***13-Concat Operatörü => Verilen tüm Observable'ları sırasıyla yayan Observable oluşturur.
    // const obs1 = of(1,2,3);
    // const obs2 = of(4,5,6);
    // const obs3 =of(7,8,9);

    // const obs4 =concat(obs1,obs2,obs3);
    // obs4.subscribe((a)=>{console.log(a)});

    //***14-forkJoin Operatörü=> Observable'ların tamamlanmasını bekler ve sonra yayınlanan sonuncu değerlerin elde edilmesini sağlar.
    // const obs1 = of(1,2,3);
    // const obs2 = of(4,5,6);
    // const obs3 = of(7,8,9);

    // const obs4 =forkJoin(obs1,obs2,obs3);
    // obs4.subscribe((a)=>{console.log(a)});

    //***15-merge Operatörü => Observable'ları birleştirerek tek bir Observable oluşturur.
    // const obs1=of('a','b','c');
    // const obs2=of(1,2,3);

    // const obs3 =merge(obs1,obs2);
    // obs3.subscribe((a)=>{console.log(a)});

    //***16-Partition Operatörü => Observable'ları belirli şarta göre,şartı karşılayanlar ve karşılamayanlar olmak üzere ikiye böler.
    // const obs1 =of(1,2,3,4,5,6,7,8,9);
    // const [obs2,obs3]=partition(obs1,x=> x%3==0);
    // obs2.subscribe((a)=>{console.log('Şarta uyanlar:',a)});
    // obs3.subscribe((b)=>{console.log('Şarta uymayanlar:',b)});

    //***17-race Operatörü =>İlk yayına başlayan Observable'a abone olur.
    // const obs1 = interval(1000).pipe(mapTo('Ceyhun'));
    // const obs2 = interval(300).pipe(mapTo('AKİF'));
    // const obs3 = interval(2000).pipe(mapTo('Gazetecilik'));

    // race(obs1,obs2,obs3).subscribe((a)=>{console.log(a)});

    //***18-zip Operatörü => Birden fazla Observable yayınındaki dataları dizi olarak döndüren operatördür.
    // const obs1 = of(1,2,3);
    // const obs2 = of(4,5,6);
    // const obs3 = of(7,8,9);

    // zip(obs1,obs2,obs3).subscribe((a)=>{console.log(a)});

    //***20-PİPE FONKSİYONU =>Kod içerisinde yaygın olarak kullanılan birden fazla operatör dizisi varsa pipe fonksiyonu kullanılabilir.
    // const obs = of(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 30);

    // obs.pipe(filter((x) => x % 3 == 0),map((x) => x + ' değeri'))
    //   .subscribe((a) => {
    //     console.log(a);
    //   });

    //***21-Audit Operatörü => Audit,bir süre için Observable akışındaki değerler üzerinde işlem yapmamıza izin verir ve ardından en sonuncu(yeni) değerleri yayınlar.
    // const obs =interval(1000);
    // const obs1 =obs.pipe(audit(x=>interval(2000)),map(x=>x +' değeri'));
    // obs1.subscribe((a)=>{console.log(a)});
    
    //AuditTime Operatörü => audit operatörünün parametreli halidir.
    // const obs =interval(1000);
    // const obs1 =obs.pipe(auditTime(2000),map(x=>x +' değeri'));
    // obs1.subscribe((a)=>{console.log(a)}); 

    //***22-debounce Operatörü => Akıştaki değerlerin zaman aşımı süresini belirleyebilmek için kullanılan bir operatördür.
    // const obs = fromEvent(document,"click");
    // obs.pipe(debounce(x=>interval(300))).subscribe((a)=>{console.log(a)});
    
    //***23-debounceTime Operatörü => debounce operatörünün parametreli halidir.
    // const obs = fromEvent(document,"click");
    // obs.pipe(debounceTime(100).subscribe((a)=>{console.log(a)});

    //***24-distinct Operatörü => Akıştaki verilerden tekrar edenleri tekil olarak döndüren operatördür.
    // const obs = of(1,3,5,3,7,1,8,9,4,6,11,8);
    // obs.pipe(distinct(x=>x)).subscribe((a)=>{console.log(a)});

    //***25-distinctUnitelChanged Operatörü => Akıştaki verileri değişiklik olana kadar tekilleştiren operatördür.

    //***26-distinctUnitelKeyChanged Operatörü => Akıştaki objelerden verilen key'e göre değişiklik olana kadar tekilleştiren operatördür.
    
    //***27-elementAt Operatörü => Akıştaki verilerden index numarası verileni döndüren operatördür.
    // const obs = of(1,3,5,7,9,11,13,15,17,19);
    // obs.pipe(elementAt(5)).subscribe((a)=>{console.log(a)}); 
    

    //***28-filter Operatörü => Observable'daki verileri belirli bir koşula göre yayan operatördür.Filtreleme işlemi yapar.
    // const obs = of('Akif','Ali','Ahmet','Mehmet','Ceyhun','Cihan')
    //                .pipe(filter(x=>x.indexOf('A')===-1)).subscribe((a)=>{console.log(a)});

    //***29-first Operatörü => Observable'daki ilk değeri getiren operatördür.
    // const obs =of(1,3,5,7).pipe(first()).subscribe((a)=>{console.log(a)});

    //***30-ignoreElements Operatörü => Observable tarafından yayılan tüm öğeleri yok sayar,görmezden gelir.Yalnızca complete ve errorçıktılarını yakalar.
    // const obs = of(1,3,5,7,9);
    // obs.pipe(ignoreElements()).subscribe({
    //   error:error =>console.log(error),
    //   complete:()=>console.log('Akış bitti...')
    // })

    //***31-last Operatörü => Observable'daki son değeri yakalar.
    // const obs = of(3,1,5,9,7);
    // obs.pipe(last()).subscribe((a)=>console.log(a));

    //***32-sample Operatörü => Periyodik zaman aralıkları içinde bir Observable tarafından yayılan en son öğeyi yakalar.
    // const seconds=interval(5000);
    // const obs = fromEvent(document,"click");
    // const result = seconds.pipe(sample(obs));
    // result.subscribe((a)=>{console.log(a)});


    //***33-sampleTime => Periyodik zaman aralıkları içinde bir Observable tarafından yayılan en son öğeyi yakalar.
    // const obs = fromEvent(document,"click");
    // const result = obs.pipe(sampleTime(1000));
    // result.subscribe((a)=>{console.log(a)});


    //***34-single Operatörü => Bu operatör neticesinde bildirilen şarta uygun birden fazla değer söz konusuysa
                              //hata verecek veya herhangi bir değer yoksa 'undifiend' dönecektir. Verielen şarta
                              //uygun sade ve sadece tek bir değer döndürmelidir.

    const obs = range(1,9).pipe(single(x=>x==9)).subscribe({
      next:a=>console.log(a),//undifiend döner 
      error:b=>console.log(b)//hata döner.
    })



















  }
}
