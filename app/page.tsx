"use client"
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="m-auto w-full ">
      <div className="generation-form w-1/2 m-auto border-5 border-gray-900 rounded-sm p-5">
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const productName = formData.get("productName") as string;
            const productImage = formData.get("productImage") as string;
            console.log(productName, productImage);
          }}
        >
          <label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              className="w-full p-3 bg-transparent border-2 border-gray-300"
              aria-required="true"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="productImage"
              placeholder="Product Image URL"
              className="w-full p-3 bg-transparent border-2 border-gray-300"
              aria-required="true"
              
              required
            />
          </label>
          <Button type="submit" color="primary" className="w-full rounded-none">
            Generate Video
          </Button>
        </form>
      </div>
    </div>
  );
}
