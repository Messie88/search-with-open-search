import Image from "next/image";

// Products items component
const ProducItem = ({dataSoucre}: any) => 
  <div>
    {dataSoucre.products.map((product: any) => 
    <div key={product.product_id}  style={{display: 'flex', margin: '20px', border: '1px solid rgba(9,45,112,.1)', borderRadius: '5px', overflow: 'hidden' }}>
      <Image src='/appart.webp' width='500' height='350' alt='' />
      <div style={{padding: '20px'}}>
        <p style={{fontWeight: 'bolder'}}>
          {product.category}
        </p>
        <h1 style={{margin: '15px 0 20px 0'}}>{product.product_name}</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ea provident quam pariatur  repellendus alias debitis!
        </p>

        <p>
          {dataSoucre.customer_first_name}
        </p>
      </div>
      <div>

      </div>
    </div>
    )}
  </div>

  export default ProducItem