import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I trial WonderHal?',
      answer:
        'Yes, we offer a 5 day free trial, no credit card required, which includes all WonderHal features and up to 5,000 words for free.',
    },
    {
      question: "What counts as a word in WonderHal's pricing?",
      answer:
      "Any word that is returned by WonderHal's AI when you generate or regenerate copy. You can track how many words you have used at all times within the WonderHal app and keep on top of your usage.",
    },
    {
      question: 'What happens if I use more than 50,000 words / month?',
      answer: 'Once you hit your 50,000 word limit we simply add up the words you have consumed above 50,000 and bill you at a rate of $0.0004 / word (approx $20 per 50,000 words), so you only pay for what you use.',
    },
  ],
  [
    {
      question: 'Who is WonderHal for?',
      answer:
        "WonderHal is for everyone. Whatever you're writing, WonderHal helps you get your ideas out faster and clearer, freeing you up to be as creative as you can be.",
    },
    {
      question:
      'How should I use WonderHal?',
      answer:
      'We recommend that you use WonderHal as a tool to enhance your creativity and productivity. AI is an incredible tool, but it is best used side-by-side with a human touch to guide it.',
    },
    {
      question: 'Where is WonderHal based?',
      answer:
        'WonderHal is based in beautiful New Zealand down in the South Pacific!',
    },
  ],
  [
    {
      question:
        'Can I get a demo?',
      answer:
        "Definitely, just get in touch with the WonderHal team and we'll show you around the product!",
    },
    {
      question: 'Do you offer custom pricing for large teams?',
      answer: 'We offer bespoke engagements for teams above 5 users, please get in touch with our team to discuss further.',
    },
    {
      question: 'Do you have a partnership programme?',
      answer:
        'Yes we do, get in touch with our team to discuss how we work with content-creators and agencies.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for get in touch with us!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
