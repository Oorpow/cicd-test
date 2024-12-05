import { ref } from 'vue'

export default function TestTsx() {
  const title = ref('tsx template')

  return <div>{title.value}</div>
}
