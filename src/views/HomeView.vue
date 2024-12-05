<script setup lang="ts">
import { ref } from 'vue'

const replayer = ref<HTMLVideoElement | null>(null)
const player = ref<HTMLVideoElement | null>(null)
const mediaRecorder = ref<MediaRecorder | null>(null)
const blobs = ref<Blob[]>([])

async function record() {
  const stream =  await navigator.mediaDevices['getDisplayMedia']({
    audio: true,
    video: {
      width: {
        ideal: 1440,
        max: 1920
      },
      height: {
        ideal: 932,
        max: 1080
      }
    }
  })

  if (player.value) {
    player.value.srcObject = stream
  }

  mediaRecorder.value = new MediaRecorder(stream, {
    mimeType: 'video/webm'
  })
  mediaRecorder.value.ondataavailable = (e) => {
    blobs.value.push(e.data)
  }
  mediaRecorder.value.start()
}

// 开启录屏
function handleStartVideoRecord() {
  record()
}

// 结束录屏
function handleStopVideoRecord() {
  if (mediaRecorder.value) {
    mediaRecorder.value.stop()
    console.log('暂停')
  }
}

// 录屏回放
function replayVideo() {
  const blob = new Blob(blobs.value, {
    type: 'video/webm'
  })
  if (replayer.value) {
    replayer.value.src = URL.createObjectURL(blob)
    replayer.value?.play()
  }
}

// 本地下载
function handleDownloadVideoRecord() {
  const blob = new Blob(blobs.value, {
    type: 'video/webm'
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.style.display = 'none'
  a.download = 'huiyi.webm'
  a.click()
}
// TODO 录屏文件生成完毕后，传递至后端进行存储
// TODO 录频文件一般较大，在进行文件传输时，需要进行切片处理，以提高传输效率
</script>

<template>
  <main>
    <section>
      <video ref="player" autoplay ></video>
      <video ref="replayer" controls></video>
    </section>
    <section>
      <button @click="handleStartVideoRecord">开启录屏</button>
      <!-- <button>开启摄像头</button> -->
      <button @click="handleStopVideoRecord">结束</button>
      <button @click="replayVideo">回放</button>
      <button @click="handleDownloadVideoRecord">下载</button>
    </section>
  </main>
</template>
