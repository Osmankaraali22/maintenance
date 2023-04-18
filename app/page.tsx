import Image from "next/image";

export default function Home() {
  return (
    <article className="flex flex-col gap-3">
      <Image
        src="/kachfi1.png"
        alt="kachfi"
        width={200}
        height={200}
        className="mx-auto "
      />
      <h1>We&rsquo;ll be back soon!</h1>
      <p>
        Sorry for the inconvenience. We&rsquo;re performing some maintenance at
        the moment. If you need to you can always follow us on{" "}
        <a href="https://www.facebook.com/KachfiScoutShop">facebook</a> for
        updates, otherwise we&rsquo;ll be back up shortly!
      </p>
      <p>&mdash; The kachfi.com Team</p>

      <div className="flex flex-row justify-center">
        <p>
          <a href="www.wa.me/96103416562">
            {" "}
            <Image
              src="https://img.icons8.com/color/48/null/whatsapp--v6.png"
              alt="whatsapp"
              width={50}
              height={50}
            />
          </a>{" "}
        </p>
        <p>
          <a href="mailto: info@kachfi.com">
            {" "}
            <Image
              src="https://img.icons8.com/bubbles/50/null/new-post.png"
              alt="mail"
              width={50}
              height={50}
            />
          </a>{" "}
        </p>
      </div>
    </article>
  );
}
