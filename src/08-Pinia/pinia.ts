import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMsgStore = defineStore('msg', () => {
    const msg = ref('Hello, Pinia!')
    function setMsg(__msg: string) {
        msg.value = __msg
    }

    return { msg, setMsg }
});
