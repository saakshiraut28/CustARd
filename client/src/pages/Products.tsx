/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vDvjR5h3r7U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Cream from "../assets/product.jpg"

export default function Component() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-4 md:gap-6 p-4 md:p-6">
      <div className="flex flex-col rounded-lg overflow-hidden border border-2 shadow-lg">
        <Link className="flex-1" to="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Product 1"
          className="aspect-video w-full object-cover"
          height={300}
          src={Cream}
          width={400}
        />
        <div className="flex-1 p-4 gap-4 items-start">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold text-base md:text-lg">Vaseline </h3>
            <h4 className="font-semibold text-base md:text-lg">$3.81</h4>
          </div>
          <p className="text-sm text-gray-500 py-4">These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.</p>
          <Button className="w-full" size="icon">
            Show More
          </Button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg overflow-hidden border border-2 shadow-lg">
        <Link className="flex-1" to="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Product 1"
          className="aspect-video w-full object-cover"
          height={300}
          src={Cream}
          width={400}
        />
        <div className="flex-1 p-4 gap-4 items-start">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold text-base md:text-lg">Vaseline </h3>
            <h4 className="font-semibold text-base md:text-lg">$3.81</h4>
          </div>
          <p className="text-sm text-gray-500 py-4">These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.</p>
          <Button className="w-full" size="icon">
            Show More
          </Button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg overflow-hidden border border-2 shadow-lg">
        <Link className="flex-1" to="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Product 1"
          className="aspect-video w-full object-cover"
          height={300}
          src={Cream}
          width={400}
        />
        <div className="flex-1 p-4 gap-4 items-start">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold text-base md:text-lg">Vaseline </h3>
            <h4 className="font-semibold text-base md:text-lg">$3.81</h4>
          </div>
          <p className="text-sm text-gray-500 py-4">These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.</p>
          <Button className="w-full" size="icon">
            Show More
          </Button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg overflow-hidden border border-2 shadow-lg">
        <Link className="flex-1" to="#">
          <span className="sr-only">View</span>
        </Link>
        <img
          alt="Product 1"
          className="aspect-video w-full object-cover"
          height={300}
          src={Cream}
          width={400}
        />
        <div className="flex-1 p-4 gap-4 items-start">
          <div className="flex items-center justify-between py-4">
            <h3 className="font-semibold text-base md:text-lg">Vaseline </h3>
            <h4 className="font-semibold text-base md:text-lg">$3.81</h4>
          </div>
          <p className="text-sm text-gray-500 py-4">These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.These stylish sunglasses are a must-have accessory for any occasion.</p>
          <Button className="w-full" size="icon">
            Show More
          </Button>
        </div>
      </div>
    </section>
  )
}

