const paths: Record<string, string[]> = {
  microphone: [
    'M12 0C10.9391 0 9.92172 0.421427 9.17157 1.17157C8.42143 1.92172 8 2.93913 8 4V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12V4C16 2.93913 15.5786 1.92172 14.8284 1.17157C14.0783 0.421427 13.0609 0 12 0ZM10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12V4C10 3.46957 10.2107 2.96086 10.5858 2.58579Z',
    'M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.753 19.7165 16.3942 18.9195 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10Z',
  ],
  microphoneOff: [
    'M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L8 9.41421V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C12.7206 16 13.4212 15.8056 14.0315 15.4457L15.4762 16.8904C14.4675 17.6075 13.254 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.423 19.758 15.7724 19.1991 16.9054 18.3196L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM12.5176 13.9319L10 11.4142V12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.1763 14 12.3502 13.9767 12.5176 13.9319Z',
    'M9.17157 1.17157C9.92172 0.421427 10.9391 1.49012e-08 12 1.49012e-08C13.0609 1.49012e-08 14.0783 0.421427 14.8284 1.17157C15.5786 1.92172 16 2.93913 16 4V9.57683C16 10.1291 15.5523 10.5768 15 10.5768C14.4477 10.5768 14 10.1291 14 9.57683V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2731 2.89846 10.0746 3.30404 10.0173 3.73766C9.94484 4.28517 9.44228 4.67031 8.89476 4.59788C8.34725 4.52545 7.96211 4.02289 8.03454 3.47537C8.14926 2.60815 8.54615 1.79699 9.17157 1.17157Z',
    'M19 9C19.5523 9 20 9.44771 20 10V12C20 12.5535 19.9426 13.1011 19.8312 13.6349C19.7183 14.1755 19.1886 14.5223 18.6479 14.4094C18.1073 14.2965 17.7605 13.7668 17.8734 13.2261C17.957 12.8259 18 12.4152 18 12V10C18 9.44771 18.4477 9 19 9Z',
  ],
  close: [
    'M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z',
  ],
  profile: [
    'M12 .2c2.5 0 4.6 2.1 4.6 4.6S14.5 9.4 12 9.4 7.4 7.3 7.4 4.8 9.5.2 12 .2zm-7 15c.4-2.8 2.8-4.9 5.6-4.9h2.7c2.8 0 5.2 2.1 5.6 4.9l.9 6.1c.2 1.3-.8 2.4-2.1 2.4l-5.7.1-5.8-.1c-1.3 0-2.3-1.2-2.1-2.4l.9-6.1z',
  ],
  camera: [
    'M17 10.0568V7C17 5.34315 15.6569 4 14 4H3C1.34315 4 0 5.34315 0 7V17C0 18.6569 1.34315 20 3 20H14C15.6569 20 17 18.6569 17 17V13.9432L22.4188 17.8137C22.7236 18.0315 23.1245 18.0606 23.4576 17.8892C23.7907 17.7178 24 17.3746 24 17V7C24 6.62541 23.7907 6.28224 23.4576 6.11083C23.1245 5.93943 22.7236 5.96854 22.4188 6.18627L17 10.0568ZM2 7C2 6.44772 2.44772 6 3 6H14C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18H3C2.44772 18 2 17.5523 2 17V7ZM22 15.0568L17.7205 12L22 8.94319V15.0568Z',
  ],
  cameraOff: [
    'M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L2.61109 4.0253C1.95895 4.11055 1.34882 4.40854 0.87868 4.87868C0.316071 5.44129 1.49012e-08 6.20435 1.49012e-08 7V17C1.49012e-08 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H14C14.7957 20 15.5587 19.6839 16.1213 19.1213C16.3957 18.847 16.6114 18.5249 16.7605 18.1747L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM15 16.4142L4.58579 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V16.4142Z',
    'M10.66 6H14C14.2652 6 14.5196 6.10536 14.7071 6.29289C14.8946 6.48043 15 6.73478 15 7V10.34C15 10.6052 15.1054 10.8596 15.2929 11.0471L16.2929 12.0471C16.6402 12.3944 17.1882 12.4381 17.5861 12.1503L22 8.95752V17C22 17.5523 22.4477 18 23 18C23.5523 18 24 17.5523 24 17V7C24 6.62434 23.7895 6.28037 23.4549 6.10947C23.1204 5.93857 22.7183 5.96958 22.4139 6.18975L17.1045 10.0303L17 9.92579V7C17 6.20435 16.6839 5.44129 16.1213 4.87868C15.5587 4.31607 14.7956 4 14 4H10.66C10.1077 4 9.66 4.44772 9.66 5C9.66 5.55228 10.1077 6 10.66 6Z',
  ],
  chevronDown: [
    'M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z',
  ],
  chevronRight: [
    'M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z',
  ],
  volume: [
    'M19.7772 4.22299C19.3868 3.83241 18.7536 3.83231 18.363 4.22278C17.9724 4.61324 17.9723 5.24641 18.3628 5.63699C20.05 7.32474 20.9979 9.61352 20.9979 12C20.9979 14.3865 20.05 16.6752 18.3628 18.363C17.9723 18.7536 17.9724 19.3867 18.363 19.7772C18.7536 20.1677 19.3868 20.1676 19.7772 19.777C21.8394 17.7142 22.9979 14.9168 22.9979 12C22.9979 9.08319 21.8394 6.2858 19.7772 4.22299Z',
    'M16.2472 7.75299C15.8568 7.36241 15.2236 7.36231 14.833 7.75278C14.4424 8.14324 14.4423 8.77641 14.8328 9.16699C15.5827 9.9171 16.0039 10.9343 16.0039 11.995C16.0039 13.0556 15.5827 14.0729 14.8328 14.823C14.4423 15.2136 14.4424 15.8467 14.833 16.2372C15.2236 16.6277 15.8568 16.6276 16.2472 16.237C17.372 15.1118 18.0039 13.586 18.0039 11.995C18.0039 10.404 17.372 8.87816 16.2472 7.75299Z',
    'M12 4.99999C12 4.61559 11.7797 4.26521 11.4332 4.09869C11.0867 3.93217 10.6755 3.97899 10.3753 4.21913L5.64922 7.99999H2C1.44772 7.99999 1 8.44771 1 8.99999V15C1 15.5523 1.44772 16 2 16H5.64922L10.3753 19.7809C10.6755 20.021 11.0867 20.0678 11.4332 19.9013C11.7797 19.7348 12 19.3844 12 19V4.99999ZM6.62469 9.78086L10 7.08062V16.9194L6.62469 14.2191C6.44738 14.0773 6.22707 14 6 14H3V9.99999H6C6.22707 9.99999 6.44738 9.92271 6.62469 9.78086Z',
  ],
  volumeOff: [
    'M11.4332 4.09869C11.7797 4.26521 12 4.61559 12 4.99999V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V8.99999C1 8.44771 1.44772 7.99999 2 7.99999H5.64922L10.3753 4.21913C10.6755 3.97899 11.0867 3.93217 11.4332 4.09869ZM10 7.08062L6.62469 9.78086C6.44738 9.92271 6.22707 9.99999 6 9.99999H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08062Z',
    'M23.7071 8.29289C24.0976 8.68342 24.0976 9.31658 23.7071 9.70711L21.4142 12L23.7071 14.2929C24.0976 14.6834 24.0976 15.3166 23.7071 15.7071C23.3166 16.0976 22.6834 16.0976 22.2929 15.7071L20 13.4142L17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071C15.9024 15.3166 15.9024 14.6834 16.2929 14.2929L18.5858 12L16.2929 9.70711C15.9024 9.31658 15.9024 8.68342 16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289L20 10.5858L22.2929 8.29289C22.6834 7.90237 23.3166 7.90237 23.7071 8.29289Z',
  ],
};

export default paths;
