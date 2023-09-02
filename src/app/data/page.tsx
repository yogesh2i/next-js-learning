import Image from "next/image";

export const fetchfn = async (): Promise<string> => {
    let res: any = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data: any = await res.json();
    return data;
}
interface item{
    id: number,
    title: string,
    url: string
}
export default async function page() {
    let data: any = await fetchfn();
    console.log(data);
    return ( 
        <div>
      
      {data && data.map((item:item,index: number)=>{
        if(index<5){

            return (
                <div style={{position:'relative'}} key={item.id}>

            <Image src={item.url} alt="user image" width={100} height={200}/>
        <h3 >{item.title}</h3>
            </div>)
            }
      })}
    </div>
  )
}
