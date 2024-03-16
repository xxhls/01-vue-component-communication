import mitt from 'mitt'
 
type Events = {
  sendMsg: string
}
 
const bus = mitt<Events>()
export default bus