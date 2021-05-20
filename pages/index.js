import atomize from '@quarkly/atomize'

const Hello = atomize.div()

export default function Home() {
  return <Hello background="tomato" color="yellow" margin="20px">My page</Hello>
}
