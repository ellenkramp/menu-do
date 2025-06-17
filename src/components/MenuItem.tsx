import Image from "next/image";

export default function MenuItem({
  name,
  description,
  price,
  image,
}: {
  name: string;
  description: string;
  price: number;
  image: string;
}) {
  console.log(image);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-1">{name}</h3>
        <p className="text-neutral-dark text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-base font-medium">${price.toFixed(2)}</span>
          <button className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary transition text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
