/*export class TodoItem{
    description:string;
    action:string;
    constructor(description:string, action:string){
        this.description=description;
        this.action=action;
    }
}*/

/* Özellik tanımlaması yapmadan kullanım şekli,
    Direkt olarak constructor içinde özellikleri oluşturmayöntemi ile
    Özellikleri kullanmak için public ya da private olduklarını bildirmek gerekir.
export class TodoItem{
    constructor(public description:string, public action:string){
        this.description=description;
        this.action=action;
    }
}*/

/*her zaman class kullanmak zorunda değiliz bu durumda 
interface tanımlaması yapılarak kullanılabilir.
    interfacede constructor kullanımı yapılmaz, sadece oluşturulacak olan nesnelerin bir şemasını oluşturmaya izin verir
    todocomponent sayfasında constructor olarak oluşturduğumuz nesneler hata verecektir.*/
export interface TodoItem{
    description:string;
    action:string;
}