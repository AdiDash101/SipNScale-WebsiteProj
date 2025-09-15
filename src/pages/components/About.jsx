import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="min-h-screen w-full bg-green-500 text-white p-12">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <div className="body space-y-4 max-w-3xl">
          <p>
            Nullam mattis mattis dictum. Praesent sit amet condimentum mi, quis venenatis lectus. 
            Phasellus ac ante id purus viverra hendrerit quis at ex. Donec vitae augue pulvinar augue dictum 
            fermentum dapibus nec tellus.
          </p>
          <p>
            Phasellus cursus, ante in eleifend vehicula, leo metus mattis est, sit amet dignissim dui nibh in dui. 
            Nullam dictum tortor vitae quam condimentum, eget tincidunt nisi tincidunt. Praesent ut erat at purus gravida 
            aliquam non a purus. Pellentesque sagittis in justo vel venenatis.
          </p>
        </div>
      </section>
    </>
  )
}
