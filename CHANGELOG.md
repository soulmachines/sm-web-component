# Change Log

# [1.12.0](https://github.com/soulmachines/sm-web-component/compare/1.11.0...1.12.0) (2023-01-18)


### Bug Fixes

* audio button color is not correct when muted QUIC-2310 ([#351](https://github.com/soulmachines/sm-web-component/issues/351)) ([0a0b3b5](https://github.com/soulmachines/sm-web-component/commit/0a0b3b54d5c493e73c7c4d5a186e29be6f507d36))
* firefox scroll issue when going from a long cc to a short cc quic-2376  ([#372](https://github.com/soulmachines/sm-web-component/issues/372)) ([b403d70](https://github.com/soulmachines/sm-web-component/commit/b403d70bceae6bf52d8f0b33f7d1f6c5fb9e67c1))
* fix markup card QUIC-2346 ([#367](https://github.com/soulmachines/sm-web-component/issues/367)) ([a1a897f](https://github.com/soulmachines/sm-web-component/commit/a1a897fdb3d5f85c3f31f2d70e461f7636d1be5c))
* fullframe small screen put convo icon at bottom quic-2348 ([#371](https://github.com/soulmachines/sm-web-component/issues/371)) ([3476dcf](https://github.com/soulmachines/sm-web-component/commit/3476dcfbea98f6f880584cc4b81b222118770c90))
* options not full width ([#369](https://github.com/soulmachines/sm-web-component/issues/369)) ([c5b86aa](https://github.com/soulmachines/sm-web-component/commit/c5b86aad1372355f4680d8b8d1b60b0acf70ccaa))
* outline the content card and not the area around it ([#364](https://github.com/soulmachines/sm-web-component/issues/364)) ([8033161](https://github.com/soulmachines/sm-web-component/commit/8033161d2b03cc79685ffa9ed3c3423a1202d572))
* remove default controls from video ([#354](https://github.com/soulmachines/sm-web-component/issues/354)) ([c319e49](https://github.com/soulmachines/sm-web-component/commit/c319e49cb9012ae2fd6e6f8482d3488a82d40ae6))
* Safari bfcache issue - reload when navigating from bfcache QUIC-2288 ([#347](https://github.com/soulmachines/sm-web-component/issues/347)) ([97d854d](https://github.com/soulmachines/sm-web-component/commit/97d854d6139a17d42364f89e36946b88b435556e))


### Features

* add backdrop blur component QUIC-2277 ([#355](https://github.com/soulmachines/sm-web-component/issues/355)) ([18f7c0b](https://github.com/soulmachines/sm-web-component/commit/18f7c0b435e7b8b642b62f63fea1e6fcca3e81c2))
* Add speech marker event handler in widget to toggle layout QUIC-2282 ([#365](https://github.com/soulmachines/sm-web-component/issues/365)) ([9c22918](https://github.com/soulmachines/sm-web-component/commit/9c2291872fa0d347d5cd9ff2ff5e7b0936b14027))
* always bind public methods quic-2370 ([#370](https://github.com/soulmachines/sm-web-component/issues/370)) ([a56340d](https://github.com/soulmachines/sm-web-component/commit/a56340d0121d4ddebeb40958aa3de0182c72cb3f))
* blur video but not controls quic-2339 ([#362](https://github.com/soulmachines/sm-web-component/issues/362)) ([4311888](https://github.com/soulmachines/sm-web-component/commit/43118889b4367ac27c4e8033e2250c637ef2ea91))
* clean up event listeners quic-2355 ([#363](https://github.com/soulmachines/sm-web-component/issues/363)) ([c4a7d50](https://github.com/soulmachines/sm-web-component/commit/c4a7d5057c1a90725e393bf04e806e5555fa6de0))
* Expose scene and persona as public properties of the widget QUIC-2274 ([#352](https://github.com/soulmachines/sm-web-component/issues/352)) ([1f73c6a](https://github.com/soulmachines/sm-web-component/commit/1f73c6abbbd414e84ecc52aff1fee7010935d404))
* position content cards and wire up blur quic-2276 ([#357](https://github.com/soulmachines/sm-web-component/issues/357)) ([703928f](https://github.com/soulmachines/sm-web-component/commit/703928f87ba216ff5fdd78e8e02b88269368c4ec))
* position content cards in fullframe desktop mode QUIC-2232 ([#353](https://github.com/soulmachines/sm-web-component/issues/353)) ([f8c1e0c](https://github.com/soulmachines/sm-web-component/commit/f8c1e0c1d6e98833fa55195f5bed029d60ee6f26))
* remove close button of content cards ([#356](https://github.com/soulmachines/sm-web-component/issues/356)) ([c53ff03](https://github.com/soulmachines/sm-web-component/commit/c53ff03626d49f0b10b7b321d1502684b98d08c0))
* remove max height modal cc quic-2341 ([#360](https://github.com/soulmachines/sm-web-component/issues/360)) ([75d9c94](https://github.com/soulmachines/sm-web-component/commit/75d9c9459ee996420b26fcc86d06719373fc73e6))
* setup fullframe a11y modal QUIC-2214 QUIC-2225 ([#350](https://github.com/soulmachines/sm-web-component/issues/350)) ([8e3d114](https://github.com/soulmachines/sm-web-component/commit/8e3d114522f55ba8d8b0cb6269e60370e747e4d6))
* setup jest axe to catch some a11y issues ([#366](https://github.com/soulmachines/sm-web-component/issues/366)) ([d64dd4c](https://github.com/soulmachines/sm-web-component/commit/d64dd4c4562c6ba513517cb23bd0f930289066f8))
* style it for mobile ([#349](https://github.com/soulmachines/sm-web-component/issues/349)) ([a0aedb0](https://github.com/soulmachines/sm-web-component/commit/a0aedb0240c916e45627740b6790075e38d18627))

# [1.11.0](https://github.com/soulmachines/sm-web-component/compare/1.10.0...1.11.0) (2022-11-08)


### Bug Fixes

* set connect button bg to white quic-2256 ([#340](https://github.com/soulmachines/sm-web-component/issues/340)) ([f4e95d2](https://github.com/soulmachines/sm-web-component/commit/f4e95d243b1d786bbea15a49ad951150896329ff))
* use different config for serving the app tp building it quic-2246 ([#338](https://github.com/soulmachines/sm-web-component/issues/338)) ([2129ed7](https://github.com/soulmachines/sm-web-component/commit/2129ed70adae6a68d82d3340ac10631f4954cb1d))


### Features

* Add layout attribute on widget ([#330](https://github.com/soulmachines/sm-web-component/issues/330)) ([0f04222](https://github.com/soulmachines/sm-web-component/commit/0f042225157e52f2b47e0ccc41880f77ca840eb2))
* add layout attribute on widget QUIC-2195 ([#341](https://github.com/soulmachines/sm-web-component/issues/341)) ([18bff12](https://github.com/soulmachines/sm-web-component/commit/18bff1268ad4b5694c53e6f9e3194a843dfaec10))
* add maximize and chevronDown buttons to toggle float layout and full frame layout QUIC-2223 QUIC-2224 ([#334](https://github.com/soulmachines/sm-web-component/issues/334)) ([e179c39](https://github.com/soulmachines/sm-web-component/commit/e179c39e002d396ab62f6327a557ddcabf9d4f50))
* bundle web components in umd library mode quic-2246 ([#337](https://github.com/soulmachines/sm-web-component/issues/337)) ([0c8bc33](https://github.com/soulmachines/sm-web-component/commit/0c8bc3304e1a397e10945c1dbf7446ebe7ea0116))
* create fullframe style quic-2196 ([#335](https://github.com/soulmachines/sm-web-component/issues/335)) ([380089c](https://github.com/soulmachines/sm-web-component/commit/380089c0819398df095b624019a43c1a1e7d55db))
* fix autoplay issues quic-2234 ([#344](https://github.com/soulmachines/sm-web-component/issues/344)) ([9ed4bf1](https://github.com/soulmachines/sm-web-component/commit/9ed4bf189fc472cd0af58bcabdd9551cb3601274))
* refactor component folder quic-2215 ([#332](https://github.com/soulmachines/sm-web-component/issues/332)) ([8d60428](https://github.com/soulmachines/sm-web-component/commit/8d604285df058f50aa27ce823a7d97da159c458f))
* Reset layout to passed in layout attribute on disconnect QUIC-2233 ([#336](https://github.com/soulmachines/sm-web-component/issues/336)) ([64c55ca](https://github.com/soulmachines/sm-web-component/commit/64c55ca1c3c728ab868deb8ee9a8689508b2c8b1))

# [1.10.0](https://github.com/soulmachines/sm-web-component/compare/1.9.1...1.10.0) (2022-10-13)


### Bug Fixes

* update copied css syntax in storybook preview quic-2191 ([#327](https://github.com/soulmachines/sm-web-component/issues/327)) ([d792ac9](https://github.com/soulmachines/sm-web-component/commit/d792ac9b780c3bcb19aed05cf9381b1bdc51cb9c))


### Features

* add api key storybook prod quic-2121 ([#320](https://github.com/soulmachines/sm-web-component/issues/320)) ([b27e931](https://github.com/soulmachines/sm-web-component/commit/b27e9310193bc01a1a7a4bf16d797b2fd18f7a99))
* add segment to storybook quic-2118  ([#321](https://github.com/soulmachines/sm-web-component/issues/321)) ([ce9329a](https://github.com/soulmachines/sm-web-component/commit/ce9329a6de02284330bd13f0f881ec930e0a6fcf))
* allow live logging config in widget QUIC-2170 ([#325](https://github.com/soulmachines/sm-web-component/issues/325)) ([221144b](https://github.com/soulmachines/sm-web-component/commit/221144bb3e863ef65172c9900d149a16c8d90eab))

## [1.9.1](https://github.com/soulmachines/sm-web-component/compare/1.9.0...1.9.1) (2022-09-19)


### Bug Fixes

* downgrade vite to fix website compatibility issues QUIC-2070  ([#309](https://github.com/soulmachines/sm-web-component/issues/309)) ([df914b8](https://github.com/soulmachines/sm-web-component/commit/df914b89bc7eaea3ecf97c52827c9b37699bbb66))

# [1.9.0](https://github.com/soulmachines/sm-web-component/compare/1.8.0...1.9.0) (2022-09-18)


### Bug Fixes

* fallback to a color set on widget not the sites body color quic-2097 ([#307](https://github.com/soulmachines/sm-web-component/issues/307)) ([178f734](https://github.com/soulmachines/sm-web-component/commit/178f734916abeb56b8119c9c03024198564cacaf))
* port and localhost url quic-2088 ([#305](https://github.com/soulmachines/sm-web-component/issues/305)) ([61f1979](https://github.com/soulmachines/sm-web-component/commit/61f197930dcb0e5765bb78c8257e44fe7c8b9815))
* print out error message in console when setMediaDeviceActive fails QUIC-2070 ([#308](https://github.com/soulmachines/sm-web-component/issues/308)) ([bba5596](https://github.com/soulmachines/sm-web-component/commit/bba55963512e6d58d442a2692d9f97eee0d70876))


### Features

* create loading indictor component quic-2079 ([#303](https://github.com/soulmachines/sm-web-component/issues/303)) ([3300d18](https://github.com/soulmachines/sm-web-component/commit/3300d18acf85e964285b48e9264ee1c13151ab8d))
* jump to larger size during connecting quic-2080 ([#304](https://github.com/soulmachines/sm-web-component/issues/304)) ([7ea1450](https://github.com/soulmachines/sm-web-component/commit/7ea14507c16aedc89d2034d64540cda30ef0b895))
* live preview with color change in storybook QUIC-2069 ([#313](https://github.com/soulmachines/sm-web-component/issues/313)) ([a3b991f](https://github.com/soulmachines/sm-web-component/commit/a3b991f8aa51773ed3413b9768fde55c3000bca2)), closes [#314](https://github.com/soulmachines/sm-web-component/issues/314)
* refactor colors quic-2064 ([#310](https://github.com/soulmachines/sm-web-component/issues/310)) ([9a90d81](https://github.com/soulmachines/sm-web-component/commit/9a90d8132bfc6c4e54e069ef0c439fcfa4e1d512))
* wire up sdk connection state with loading indicator component quic-2078 ([#306](https://github.com/soulmachines/sm-web-component/issues/306)) ([c03f1bc](https://github.com/soulmachines/sm-web-component/commit/c03f1bc7a97d6bded28c5938e5f3c7d3148fed8f))

# [1.8.0](https://github.com/soulmachines/sm-web-component/compare/1.7.0...1.8.0) (2022-08-21)


### Bug Fixes

* stop link content cards from reappearing  quic-1988 ([#294](https://github.com/soulmachines/sm-web-component/issues/294)) ([e96b207](https://github.com/soulmachines/sm-web-component/commit/e96b2075e25035b13b834901823412c5746fe37d))


### Features

* add runtime host example ([#297](https://github.com/soulmachines/sm-web-component/issues/297)) ([41a3890](https://github.com/soulmachines/sm-web-component/commit/41a38903be8818eb39f01d9f123bc9326d7bf278))
* allow widget to be positioned bottom left or bottom right quic-1991 ([#295](https://github.com/soulmachines/sm-web-component/issues/295)) ([37f8c53](https://github.com/soulmachines/sm-web-component/commit/37f8c53c98419e3240c6cc68bad0b800d04e3c4f))
* bump node version to fix npm link issue quic-2038 ([#296](https://github.com/soulmachines/sm-web-component/issues/296)) ([c52421d](https://github.com/soulmachines/sm-web-component/commit/c52421d367921cf4606eacc1912916b6eb85a02e))
* display conversation state quic-1989  ([#293](https://github.com/soulmachines/sm-web-component/issues/293)) ([b0639b9](https://github.com/soulmachines/sm-web-component/commit/b0639b9d1918c24e815924824be45bdb09b84edb))

# [1.7.0](https://github.com/soulmachines/sm-web-component/compare/1.6.0...1.7.0) (2022-08-08)


### Bug Fixes

* handle new window bug that creates extra blank windows. ([#290](https://github.com/soulmachines/sm-web-component/issues/290)) ([e3e49bf](https://github.com/soulmachines/sm-web-component/commit/e3e49bf6df2822b06688b0729769ca06d772666d))
* local demo of css var ([#289](https://github.com/soulmachines/sm-web-component/issues/289)) ([1ec22b2](https://github.com/soulmachines/sm-web-component/commit/1ec22b2bc6e7551faceea060e7c3bf2b6dca6361))
* mute just makes audio quieter QUIC-1956 ([#280](https://github.com/soulmachines/sm-web-component/issues/280)) ([2c41fdd](https://github.com/soulmachines/sm-web-component/commit/2c41fdd9431e1189c7ace5cc3a28b5367d2cc31b))


### Features

* add CUE example QUIC-1950 ([#291](https://github.com/soulmachines/sm-web-component/issues/291)) ([2eed86f](https://github.com/soulmachines/sm-web-component/commit/2eed86fce8a327a56fb1cb59ee38dec718f97789))
* add markdown card QUIC-1590 ([#279](https://github.com/soulmachines/sm-web-component/issues/279)) ([4778907](https://github.com/soulmachines/sm-web-component/commit/4778907cf9275b288328a433ed72a1106c41cac2))
* add visibilitychange handler QUIC-1982 ([#285](https://github.com/soulmachines/sm-web-component/issues/285)) ([0f61b7c](https://github.com/soulmachines/sm-web-component/commit/0f61b7cc6718528e85c7c4e00b867a236c319bda))
* css variable theming for color, shadows and font quic-1980 ([#282](https://github.com/soulmachines/sm-web-component/issues/282)) ([ab4717f](https://github.com/soulmachines/sm-web-component/commit/ab4717fbeaddbd3047556d0dae067e2f5484a3c0))
* hide link description on small screens  quic-1921 ([#288](https://github.com/soulmachines/sm-web-component/issues/288)) ([7549d3f](https://github.com/soulmachines/sm-web-component/commit/7549d3fbf767030d0b49ae4c561d075a34a23138))
* Send current page url to NLP engine when session connected or navigated to a new page QUIC-2019 ([#281](https://github.com/soulmachines/sm-web-component/issues/281)) ([d755f45](https://github.com/soulmachines/sm-web-component/commit/d755f456de8d17bc594c931d1883e857fe71702a))

# [1.6.0](https://github.com/soulmachines/sm-web-component/compare/1.5.0...1.6.0) (2022-07-17)


### Bug Fixes

* camera and mic should be red when turned on ([#271](https://github.com/soulmachines/sm-web-component/issues/271)) ([2e843fa](https://github.com/soulmachines/sm-web-component/commit/2e843faa86363b1a1fafc2ba42b3eabcef882a74))
* microphone and camera indication incorrect when starting new session after session end QUIC-1935 ([#274](https://github.com/soulmachines/sm-web-component/issues/274)) ([3137223](https://github.com/soulmachines/sm-web-component/commit/313722311e1ba4e3e56461e75080a26d3ba47ab7))
* reset permissions when it is not connected  quic-1935 ([#272](https://github.com/soulmachines/sm-web-component/issues/272)) ([7392d69](https://github.com/soulmachines/sm-web-component/commit/7392d6949dabc44e1510826791c13a081136d260))
* snippet rendering issue in local dev ([#276](https://github.com/soulmachines/sm-web-component/issues/276)) ([9ab816d](https://github.com/soulmachines/sm-web-component/commit/9ab816d5e6cfd22ac3a43a7bf8da7152db8d95a1))
* use px for icon size quic-1930 ([#273](https://github.com/soulmachines/sm-web-component/issues/273)) ([7ec5fee](https://github.com/soulmachines/sm-web-component/commit/7ec5fee79332ad56907172c7d539d8b94fb1cbcd))


### Features

* always show image in full size quic-1924 ([#268](https://github.com/soulmachines/sm-web-component/issues/268)) ([722681b](https://github.com/soulmachines/sm-web-component/commit/722681b0d64b5e21b7c3afc935abbf51cc23cbae))
* create logic for internalLink card quic-1941 ([#265](https://github.com/soulmachines/sm-web-component/issues/265)) ([8e1c08e](https://github.com/soulmachines/sm-web-component/commit/8e1c08e295b82a92ad14eb00bdb73fcd5b67eac9))
* improve can autoplay audio code quic-1944 ([#269](https://github.com/soulmachines/sm-web-component/issues/269)) ([8addf5a](https://github.com/soulmachines/sm-web-component/commit/8addf5af4ab3c25a2b6ff9d05ad4b8583c3ff592)), closes [#270](https://github.com/soulmachines/sm-web-component/issues/270)
* update disconnect icon to a x quic-1913 ([#266](https://github.com/soulmachines/sm-web-component/issues/266)) ([2a64c20](https://github.com/soulmachines/sm-web-component/commit/2a64c20b0521ab9843996f63aff7ac54a3400293))

# [1.5.0](https://github.com/soulmachines/sm-web-component/compare/1.4.0...1.5.0) (2022-07-10)


### Bug Fixes

* dev release pipeline quic-1884 ([#253](https://github.com/soulmachines/sm-web-component/issues/253)) ([97dc54a](https://github.com/soulmachines/sm-web-component/commit/97dc54a4b080279235b80ed59db0b5cbf81e4b6d))
* double scroll bars quic-1925 ([#260](https://github.com/soulmachines/sm-web-component/issues/260)) ([fc7202e](https://github.com/soulmachines/sm-web-component/commit/fc7202e4f466e90518462568ae8572703ceb93bf))
* explicity set styles so it works outside of sm-widget ([#233](https://github.com/soulmachines/sm-web-component/issues/233)) ([68b9236](https://github.com/soulmachines/sm-web-component/commit/68b92367cdb180fdbcec712b76e27b2c0f7b94c0))
* icon size when html size is not 16px quic-1915 ([#256](https://github.com/soulmachines/sm-web-component/issues/256)) ([e4a3f66](https://github.com/soulmachines/sm-web-component/commit/e4a3f66bc5a10a0106c399bad964e21c6649f07d))
* large options padding quic-1920 ([#258](https://github.com/soulmachines/sm-web-component/issues/258)) ([56f1c65](https://github.com/soulmachines/sm-web-component/commit/56f1c658583addf147cf22a8183afba9e2683616))
* recreate package lock ([#232](https://github.com/soulmachines/sm-web-component/issues/232)) ([3e7ef28](https://github.com/soulmachines/sm-web-component/commit/3e7ef28840b978b19fba8ec9a1dc86b3aeaa3ee5))
* reexport icons ([#234](https://github.com/soulmachines/sm-web-component/issues/234)) ([99e84ac](https://github.com/soulmachines/sm-web-component/commit/99e84acdf26c2ac9beccf109d8255f1dfc0d37a1))
* release permissions  ([#263](https://github.com/soulmachines/sm-web-component/issues/263)) ([ade5320](https://github.com/soulmachines/sm-web-component/commit/ade5320f9913c64d0e0ccde6e01369796ed32f5d))
* release pipeline ([069cfbf](https://github.com/soulmachines/sm-web-component/commit/069cfbfce9703b16e6b52aac3e547010e35599ba))
* render stories in a sm-widget tag to get styles ([#237](https://github.com/soulmachines/sm-web-component/issues/237)) ([020160f](https://github.com/soulmachines/sm-web-component/commit/020160fd5f4910154aa00a0a616ef16328588a9b))
* reset mute button on disconnect quic-1917 ([#257](https://github.com/soulmachines/sm-web-component/issues/257)) ([e20f082](https://github.com/soulmachines/sm-web-component/commit/e20f082e820f3b40004f26ba26947602b9256764))
* storybook warning ([#247](https://github.com/soulmachines/sm-web-component/issues/247)) ([3d79d6f](https://github.com/soulmachines/sm-web-component/commit/3d79d6fa73f34f590ec93f2097183b5bd62716b6))


### Features

* add outline button theme quic-1830 ([#227](https://github.com/soulmachines/sm-web-component/issues/227)) ([f728125](https://github.com/soulmachines/sm-web-component/commit/f7281252200c6ac387fb69df1268ad42e937234c))
* add session persistence support to widget QUIC-1829 ([#261](https://github.com/soulmachines/sm-web-component/issues/261)) ([7912585](https://github.com/soulmachines/sm-web-component/commit/7912585e0d2205c033f1ad3029a79e30aa90e7c6))
* add versioning to snippet quic-1884 ([#252](https://github.com/soulmachines/sm-web-component/issues/252)) ([32c59e6](https://github.com/soulmachines/sm-web-component/commit/32c59e615132b978756ef4a8dd7495a1c0f3412f))
* allow dp to be muted quic-1845 ([#238](https://github.com/soulmachines/sm-web-component/issues/238)) ([68c3430](https://github.com/soulmachines/sm-web-component/commit/68c34305d841b316baf6c5cce1d2446b4e8407f6))
* create heading component quic-1867  ([#249](https://github.com/soulmachines/sm-web-component/issues/249)) ([543ea3c](https://github.com/soulmachines/sm-web-component/commit/543ea3c50dbd709bcf3071ea5290eaae7b64f869))
* create icon button component and style it quic-1748 ([#226](https://github.com/soulmachines/sm-web-component/issues/226)) ([67f2812](https://github.com/soulmachines/sm-web-component/commit/67f28125ac38481ad03badfc8a79fe476ae6eef7)), closes [#227](https://github.com/soulmachines/sm-web-component/issues/227) [#227](https://github.com/soulmachines/sm-web-component/issues/227)
* create image link card ([#251](https://github.com/soulmachines/sm-web-component/issues/251)) ([27e5bd4](https://github.com/soulmachines/sm-web-component/commit/27e5bd4e752e3eff9e7fae08a497b4b5a1baae77))
* create link card component quic-1592  ([#248](https://github.com/soulmachines/sm-web-component/issues/248)) ([5564eb8](https://github.com/soulmachines/sm-web-component/commit/5564eb88246239e0ce9d7259d1f018de7a044746))
* ensure mobile video size is correct quic-1816 ([#228](https://github.com/soulmachines/sm-web-component/issues/228)) ([09a1c94](https://github.com/soulmachines/sm-web-component/commit/09a1c941db3b2dbcedcf688b4d77b4414be1933b))
* fade in out cards ([#231](https://github.com/soulmachines/sm-web-component/issues/231)) ([ad8ac7a](https://github.com/soulmachines/sm-web-component/commit/ad8ac7a9e3c0923e6b455bc65d631dab92b51788))
* fix global css quic-1836 ([#229](https://github.com/soulmachines/sm-web-component/issues/229)) ([8c155c9](https://github.com/soulmachines/sm-web-component/commit/8c155c9e70c7ee3008d44873c8f9097a76d29746))
* image card quic-1593  ([#246](https://github.com/soulmachines/sm-web-component/issues/246)) ([ebf34d8](https://github.com/soulmachines/sm-web-component/commit/ebf34d8599e811a5bb428191fd6a2a732a86350a))
* log widget version to console quic-1885  ([#254](https://github.com/soulmachines/sm-web-component/issues/254)) ([3ec02b9](https://github.com/soulmachines/sm-web-component/commit/3ec02b9473cbf910c102a7a627dfc796e90c2436))
* re add outline button quic-1830 ([#230](https://github.com/soulmachines/sm-web-component/issues/230)) ([26f5845](https://github.com/soulmachines/sm-web-component/commit/26f58456f6544ef88b46fd9d53229d6d629e8574))
* replace buttons with Button component in Notifications quic-1820 ([#235](https://github.com/soulmachines/sm-web-component/issues/235)) ([7e55805](https://github.com/soulmachines/sm-web-component/commit/7e558057db3545aaf2a3d21ec36a1228a80dfdce))
* replace standard buttons with new icon button quic-1821  ([#236](https://github.com/soulmachines/sm-web-component/issues/236)) ([ce53fcf](https://github.com/soulmachines/sm-web-component/commit/ce53fcf53ea25763d246f2de543fba39e6eaf822))
* style options card quic-1823 ([#223](https://github.com/soulmachines/sm-web-component/issues/223)) ([d4fc784](https://github.com/soulmachines/sm-web-component/commit/d4fc78413f41872c5af2917d183a56c0aecbb362))
* update to node 16 quic-1853 ([#244](https://github.com/soulmachines/sm-web-component/issues/244)) ([ba8884f](https://github.com/soulmachines/sm-web-component/commit/ba8884f755c8f4bccb08834dac1e8f90d1e4d2bd))

# [1.4.0](https://github.com/soulmachines/sm-web-component/compare/1.3.1...1.4.0) (2022-06-19)


### Bug Fixes

* bring in latest sdk changes ([#207](https://github.com/soulmachines/sm-web-component/issues/207)) ([34b6e80](https://github.com/soulmachines/sm-web-component/commit/34b6e80608ba88501d4ebcfddb60c4dec389b22a))
* dont render empty box for unsupported cards quic-1789 ([#204](https://github.com/soulmachines/sm-web-component/issues/204)) ([1795d7f](https://github.com/soulmachines/sm-web-component/commit/1795d7f760f6ee10021038b2b9918ad9c146f5c4))
* improve video resizer quic-1809 ([#209](https://github.com/soulmachines/sm-web-component/issues/209)) ([d909088](https://github.com/soulmachines/sm-web-component/commit/d909088a6362a7224962c4b4f863d297260922ae))
* only call updateVideoBounds if video is connected and make video 100% width/height ([#188](https://github.com/soulmachines/sm-web-component/issues/188)) ([9b52145](https://github.com/soulmachines/sm-web-component/commit/9b52145f741b44e2c0dc1a0943fcef67cb209c5d))


### Features

* add button to toggle mic quic-1668 ([#187](https://github.com/soulmachines/sm-web-component/issues/187)) ([58ba497](https://github.com/soulmachines/sm-web-component/commit/58ba4977bec1e5f9a07251ec60c29c9bae150a1c))
* add public method for sending messages to dp quic-1801 ([#210](https://github.com/soulmachines/sm-web-component/issues/210)) ([7b9175c](https://github.com/soulmachines/sm-web-component/commit/7b9175c98f8d05131e6e0215692fef6d5cb97466))
* add workflow to deploy bundles quic-1755 ([#194](https://github.com/soulmachines/sm-web-component/issues/194)) ([31438f7](https://github.com/soulmachines/sm-web-component/commit/31438f7e99a6f6a1c99db67987e6eaa5118d37b0))
* add workflow to do prod release ([#195](https://github.com/soulmachines/sm-web-component/issues/195)) ([a9aad30](https://github.com/soulmachines/sm-web-component/commit/a9aad3015d759ab232ecadc1c3cbee8f41cac643))
* allow card to have not close button quic-1824 ([#221](https://github.com/soulmachines/sm-web-component/issues/221)) ([66496c5](https://github.com/soulmachines/sm-web-component/commit/66496c5dd125d0c83c407015d5f1e760a9ba78cb))
* autoclear cards quic-1783 ([#206](https://github.com/soulmachines/sm-web-component/issues/206)) ([51906d3](https://github.com/soulmachines/sm-web-component/commit/51906d3a84c81e4915481821fb983580b83379df))
* change x to down chevron quic-1814 ([#220](https://github.com/soulmachines/sm-web-component/issues/220)) ([be9ab8f](https://github.com/soulmachines/sm-web-component/commit/be9ab8fcfc1e8aa4d9c7aa9deefa8fb98062a0cf))
* connect without cam and mic (fix safari issue) ([#214](https://github.com/soulmachines/sm-web-component/issues/214)) ([b3e24b9](https://github.com/soulmachines/sm-web-component/commit/b3e24b9623a3ad0c1e71b51eed93fd77d694d12c))
* content cards quic-1776  ([#218](https://github.com/soulmachines/sm-web-component/issues/218)) ([25338ba](https://github.com/soulmachines/sm-web-component/commit/25338bad09e57f72d28285968f76d55b761c556e))
* create button with tailwind styling ([#215](https://github.com/soulmachines/sm-web-component/issues/215)) ([1c43dbc](https://github.com/soulmachines/sm-web-component/commit/1c43dbcdd45ea1b0493971401f0c9d7cbb61f089))
* create snippet for react quic-1742 ([#193](https://github.com/soulmachines/sm-web-component/issues/193)) ([f1b4ffc](https://github.com/soulmachines/sm-web-component/commit/f1b4ffc0312bc1ffa8ef0bec8e84f722bac524b5))
* create text component quic-1752  ([#191](https://github.com/soulmachines/sm-web-component/issues/191)) ([baae590](https://github.com/soulmachines/sm-web-component/commit/baae590b8adc229f5f2105d3d8c38f9f52ff0385))
* handle connection errors quic-1667 ([#189](https://github.com/soulmachines/sm-web-component/issues/189)) ([4b4e525](https://github.com/soulmachines/sm-web-component/commit/4b4e52568645d78541a87bf2bb25eda616870bfb))
* handle timeouts quic-1666 ([#186](https://github.com/soulmachines/sm-web-component/issues/186)) ([45df4df](https://github.com/soulmachines/sm-web-component/commit/45df4dfb1b30f46d5060df0e300b95da0621732d))
* output options content card ([#197](https://github.com/soulmachines/sm-web-component/issues/197)) ([c5a284a](https://github.com/soulmachines/sm-web-component/commit/c5a284ae88a250ec9e88e643dc46472530fd57b2))
* position layout the widget + add small animation ([#196](https://github.com/soulmachines/sm-web-component/issues/196)) ([a65c21f](https://github.com/soulmachines/sm-web-component/commit/a65c21f6496c1b922824137eedb02e4910041693))
* refactor connection booleans into an enum status quic-1751 ([#192](https://github.com/soulmachines/sm-web-component/issues/192)) ([acaf948](https://github.com/soulmachines/sm-web-component/commit/acaf948062e465e6fbc629153f69721e687b932e))
* run cypress tests against react widget QUIC-1723 ([#201](https://github.com/soulmachines/sm-web-component/issues/201)) ([34c8476](https://github.com/soulmachines/sm-web-component/commit/34c8476e5f950578e03e9b554bd00c854dda5728))
* send label when value is undefined for options card quic-1782 ([#203](https://github.com/soulmachines/sm-web-component/issues/203)) ([ee2d2f5](https://github.com/soulmachines/sm-web-component/commit/ee2d2f556446913bc9c954b9d9b51c4d125fb5aa))
* setup styling quic-1721 ([#185](https://github.com/soulmachines/sm-web-component/issues/185)) ([1849880](https://github.com/soulmachines/sm-web-component/commit/1849880e14e2d3cdf76e4c409b9167b5a3d23bbd))
* style dp connect button quic-1763 ([#208](https://github.com/soulmachines/sm-web-component/issues/208)) ([5883429](https://github.com/soulmachines/sm-web-component/commit/5883429867d235f3fd811d5c5a2c7198a238141d))
* style options card quic-1775 ([#198](https://github.com/soulmachines/sm-web-component/issues/198)) ([a58e261](https://github.com/soulmachines/sm-web-component/commit/a58e261465357ede606dbe1652ba5778a40ca92b))
* toggle camera button quic-1669 ([#217](https://github.com/soulmachines/sm-web-component/issues/217)) ([547d9bd](https://github.com/soulmachines/sm-web-component/commit/547d9bd0533394f9b47ad0bd5484b709a69ec39f))
* use type when deciding what cc to show quic-1792 ([#205](https://github.com/soulmachines/sm-web-component/issues/205)) ([f733df9](https://github.com/soulmachines/sm-web-component/commit/f733df9903c267b40504672c7c703f5c4992b9e0))

## [1.3.1](https://github.com/soulmachines/sm-web-component/compare/1.3.0...1.3.1) (2022-05-17)


### Bug Fixes

* video not playing on subsequent attempts quic-1739 ([#183](https://github.com/soulmachines/sm-web-component/issues/183)) ([21cc6c6](https://github.com/soulmachines/sm-web-component/commit/21cc6c6f77c8d1024a15a684deb0256a419a8e9b))

# [1.3.0](https://github.com/soulmachines/sm-web-component/compare/1.2.0...1.3.0) (2022-05-15)


### Bug Fixes

* black screen in safari when dp connects ([#173](https://github.com/soulmachines/sm-web-component/issues/173)) ([ade16b4](https://github.com/soulmachines/sm-web-component/commit/ade16b4a47773b01dbb23ffd8eef95cc8b402d22))
* bump preactement and remove workaround ([#170](https://github.com/soulmachines/sm-web-component/issues/170)) ([280a4f9](https://github.com/soulmachines/sm-web-component/commit/280a4f964dc8da12fbed5304b2879eda8672c7d1))
* use preact in storybook quic-1718 ([#177](https://github.com/soulmachines/sm-web-component/issues/177)) ([73e6762](https://github.com/soulmachines/sm-web-component/commit/73e6762ff3f76d11281c7c2ad2ca492d55ea7a1f))


### Features

* add disconnect button quic-1665 ([#182](https://github.com/soulmachines/sm-web-component/issues/182)) ([6e92519](https://github.com/soulmachines/sm-web-component/commit/6e92519815d85e60a8a8cad39429cb6c8cb61cdc))
* add greeting logic quic-1663 ([#181](https://github.com/soulmachines/sm-web-component/issues/181)) ([ac2a8f9](https://github.com/soulmachines/sm-web-component/commit/ac2a8f9409eaae18ce5cceb8d6e6d94044f358cd))
* connect when button is clicked quic-1662 ([#179](https://github.com/soulmachines/sm-web-component/issues/179)) ([de73c90](https://github.com/soulmachines/sm-web-component/commit/de73c908f720b33a9ba54b8b5427810dee001e5d))
* create sm-widget component quic-1661 ([#176](https://github.com/soulmachines/sm-web-component/issues/176)) ([f4fc6bc](https://github.com/soulmachines/sm-web-component/commit/f4fc6bc7e2d428c5b9be6ee8188bf02d5a2938d3))
* implement profile image quic-1664 ([#178](https://github.com/soulmachines/sm-web-component/issues/178)) ([663a37c](https://github.com/soulmachines/sm-web-component/commit/663a37c731ad05a7750cd19cd62f2c75b74d3469))
* increase video size on higher res screens quic-1717 ([#180](https://github.com/soulmachines/sm-web-component/issues/180)) ([4ff2a07](https://github.com/soulmachines/sm-web-component/commit/4ff2a07d6a21c6fc305275cda228ddf28bf1c2ab))
* put examples in root and seperate examples ([#175](https://github.com/soulmachines/sm-web-component/issues/175)) ([4e488a8](https://github.com/soulmachines/sm-web-component/commit/4e488a82b8671c602322aa709987bff23fb45333))
* responsive design widget quic-1687 ([#172](https://github.com/soulmachines/sm-web-component/issues/172)) ([2961cf6](https://github.com/soulmachines/sm-web-component/commit/2961cf60660fb52f6a108d44b8073b5525bc2eff))
* use better quality video on retina screens ([#174](https://github.com/soulmachines/sm-web-component/issues/174)) ([9f4e49a](https://github.com/soulmachines/sm-web-component/commit/9f4e49acc40a00b1e5d4e9861350c4b49216aa39))

# [1.2.0](https://github.com/soulmachines/sm-web-component/compare/1.1.0...1.2.0) (2022-04-25)


### Features

* Add camera toggle button QUIC-1646 ([#163](https://github.com/soulmachines/sm-web-component/issues/163)) ([56deb38](https://github.com/soulmachines/sm-web-component/commit/56deb38d2d2d3f81f39d4a4c901e87572c0ab5db))
* Add microphone toggle button QUIC-1645 ([#161](https://github.com/soulmachines/sm-web-component/issues/161)) ([def8a07](https://github.com/soulmachines/sm-web-component/commit/def8a0775c27f6027b477b2dc0e35b20db611669))
* Add scaffold script for creating components QUIC-1641 ([#153](https://github.com/soulmachines/sm-web-component/issues/153)) ([a0c272d](https://github.com/soulmachines/sm-web-component/commit/a0c272df15bcd75efcf0c469d73de7b51e11ae14))
* Increase video size when connection succeeds QUIC-1613 ([#158](https://github.com/soulmachines/sm-web-component/issues/158)) ([371f9d0](https://github.com/soulmachines/sm-web-component/commit/371f9d09139b0ff6d6f433c3f26e92984e1b2eb4))
* Return to disconnected state when session times out ([#160](https://github.com/soulmachines/sm-web-component/issues/160)) ([f28cfaa](https://github.com/soulmachines/sm-web-component/commit/f28cfaa4fd06f32534e04da8479be38bad29f3cd))
* support auto connect on video component quic-1658  ([#159](https://github.com/soulmachines/sm-web-component/issues/159)) ([0331c19](https://github.com/soulmachines/sm-web-component/commit/0331c19868bae14d86492066156648445009afa1))
* update video bounds on resize QUIC-1655 ([#157](https://github.com/soulmachines/sm-web-component/issues/157)) ([a8ae36e](https://github.com/soulmachines/sm-web-component/commit/a8ae36ea062aa88dea1939afdcf4d30035924f97))
* User can connect without giving access to cam and mic and turn on afterwards ([#164](https://github.com/soulmachines/sm-web-component/issues/164)) ([a243940](https://github.com/soulmachines/sm-web-component/commit/a24394070d859180fcff35eee7d60205b55b95a0))

# [1.1.0](https://github.com/soulmachines/sm-web-component/compare/1.0.0...1.1.0) (2022-04-11)


### Bug Fixes

* fix profile picture position ([#140](https://github.com/soulmachines/sm-web-component/issues/140)) ([e1c8900](https://github.com/soulmachines/sm-web-component/commit/e1c8900be42e602bcfbf6a7e40c86f7e9887dc5e))
* Greeting is not currently exposed to be configurable ([#144](https://github.com/soulmachines/sm-web-component/issues/144)) ([eea12d9](https://github.com/soulmachines/sm-web-component/commit/eea12d96d50103f5c33e2158e57acabe9fe58340))
* Reset widget visual state after session disconnect QUIC-1579 ([#141](https://github.com/soulmachines/sm-web-component/issues/141)) ([df13322](https://github.com/soulmachines/sm-web-component/commit/df13322d1c8bb316a8e03eba32cd8027a6fdd4f9))
* Snippet sometimes fails to load widget QUIC-1612 ([#143](https://github.com/soulmachines/sm-web-component/issues/143)) ([37ad997](https://github.com/soulmachines/sm-web-component/commit/37ad997ed2cb805e5dcc55e4ff21dfcc3d344456))
* Widget should always be above all other page content QUIC-1578 ([#136](https://github.com/soulmachines/sm-web-component/issues/136)) ([39a5008](https://github.com/soulmachines/sm-web-component/commit/39a50083bb206dac59629282c8693daf9120c3f9))


### Features

* add ci workflow QUIC-1626 ([#152](https://github.com/soulmachines/sm-web-component/issues/152)) ([a56dcff](https://github.com/soulmachines/sm-web-component/commit/a56dcfff3b4af7439b29e2f5285e1d552761824d))
* Add configurable greeting text QUIC-1567 ([#134](https://github.com/soulmachines/sm-web-component/issues/134)) ([06d262d](https://github.com/soulmachines/sm-web-component/commit/06d262d402058f0f752b8050fa805ab2a50e4204))
* Add configurable profile picture, connect and disconnect interactions QUIC-1571 ([#135](https://github.com/soulmachines/sm-web-component/issues/135)) ([d883c62](https://github.com/soulmachines/sm-web-component/commit/d883c62083874fb2cf547887877b7c0a4c56b04d))
* Add Jest test runner and example test QUIC-1625 ([#147](https://github.com/soulmachines/sm-web-component/issues/147)) ([1000faa](https://github.com/soulmachines/sm-web-component/commit/1000faa34594ca88b5974a00a0d5c2f1a6d633d7))
* Add loading indicator QUIC-1623 ([#154](https://github.com/soulmachines/sm-web-component/issues/154)) ([57db5d5](https://github.com/soulmachines/sm-web-component/commit/57db5d582bd7bfda8efdeb6ef3313290b257f0d4))
* Allow connection without cam/mic permissions QUIC-1584 ([#148](https://github.com/soulmachines/sm-web-component/issues/148)) ([d745f10](https://github.com/soulmachines/sm-web-component/commit/d745f10e22658eee002a4b0ab4638965402b1166))
* connect via token server quic-1622  ([#151](https://github.com/soulmachines/sm-web-component/issues/151)) ([30284e3](https://github.com/soulmachines/sm-web-component/commit/30284e3ccb86b990cdd4dfd050f3492ae03ef06f))
* Setup preact project structure and register a video web component QUIC-1620 ([#145](https://github.com/soulmachines/sm-web-component/issues/145)) ([543490b](https://github.com/soulmachines/sm-web-component/commit/543490b8bd7263c4bd8631be032e71d5956b9ca2))
* Setup storybook to render Preact components QUIC-1627 ([#146](https://github.com/soulmachines/sm-web-component/issues/146)) ([25c142c](https://github.com/soulmachines/sm-web-component/commit/25c142c4ed8227c64a809f7aa992a6c8d8de128b))
* Show default profile picture if a custom one is not provided QUIC-1577 ([#137](https://github.com/soulmachines/sm-web-component/issues/137)) ([d1dd1a2](https://github.com/soulmachines/sm-web-component/commit/d1dd1a29e04334ac0310048c7e2086bcac6c3bba))
* Support connecting via API Key QUIC-1621 ([#149](https://github.com/soulmachines/sm-web-component/issues/149)) ([feae885](https://github.com/soulmachines/sm-web-component/commit/feae885fa1c06a9608f5a238d24e24a71e309fc6))
* update script to use anonymous function ([#150](https://github.com/soulmachines/sm-web-component/issues/150)) ([b55b516](https://github.com/soulmachines/sm-web-component/commit/b55b5169df3be8afecf657f1f82ebd57122e7ed3))

# 1.0.0 (2022-03-10)


### Bug Fixes

* add button animation ([0272027](https://github.com/soulmachines/sm-web-component/commit/0272027a934dfb16e354f9c8db8d80f4279fa10a))
* ensure return types are passed back from the ExecuteCommand function QUIC-936 ([#64](https://github.com/soulmachines/sm-web-component/issues/64)) ([84b5b46](https://github.com/soulmachines/sm-web-component/commit/84b5b4606e78d02e8b623f902afbfe3065bc2f45))
* fix release workflow cannot find artifact error QUIC-1064 ([#90](https://github.com/soulmachines/sm-web-component/issues/90)) ([cf1be4b](https://github.com/soulmachines/sm-web-component/commit/cf1be4be6cbd75a8f015e926224ac29d7bc27360))
* fix vulnerabilities in npm dependencies QUIC-491 ([9dad04c](https://github.com/soulmachines/sm-web-component/commit/9dad04c66d12821e4a97c953dba4a25b4ef1697a))
* Make `package` work on both Mac and Windows ([#119](https://github.com/soulmachines/sm-web-component/issues/119)) ([24432e0](https://github.com/soulmachines/sm-web-component/commit/24432e04990759bbb8d796ba7b3938743011ee60))
* remove useless conditional of args QUIC-973 ([#78](https://github.com/soulmachines/sm-web-component/issues/78)) ([159a051](https://github.com/soulmachines/sm-web-component/commit/159a0514ee8c6e1dc1b2329ca5efbd36b5a87c01))
* type boolean inputs to take 'true' or 'false' string inputs QUIC-964 ([#72](https://github.com/soulmachines/sm-web-component/issues/72)) ([e252d27](https://github.com/soulmachines/sm-web-component/commit/e252d279ef7ef002efa8eb7f5d5d4f2f30dc5072))
* Use consistent casing for inputs QUIC-965 ([#73](https://github.com/soulmachines/sm-web-component/issues/73)) ([2d9b5c8](https://github.com/soulmachines/sm-web-component/commit/2d9b5c8f7ab241ea92a09bb2bc4f8c5559595a06))
* webSDKService to be public to be used in html file ([4e7ded0](https://github.com/soulmachines/sm-web-component/commit/4e7ded058b61d3bcf94767025cfab779a7220dd0))


### Features

* Add "default" theme based on SquareSpace demo QUIC-799 ([#103](https://github.com/soulmachines/sm-web-component/issues/103)) ([3da5e3d](https://github.com/soulmachines/sm-web-component/commit/3da5e3dd365b1659571530630070e8b43ba7732e))
* Add "none" theme based on existing styles QUIC-929 ([#97](https://github.com/soulmachines/sm-web-component/issues/97)) ([caa00c0](https://github.com/soulmachines/sm-web-component/commit/caa00c096dd64477fc143177047a82cd5a8c9c3f))
* Add `api-key` HTML input attribute QUIC-1149 ([#117](https://github.com/soulmachines/sm-web-component/issues/117)) ([bc731ad](https://github.com/soulmachines/sm-web-component/commit/bc731adc192ea167fb39796872f7c71a08a57492))
* Add attribute for setting sm-video theme QUIC-798 ([#96](https://github.com/soulmachines/sm-web-component/issues/96)) ([4d50149](https://github.com/soulmachines/sm-web-component/commit/4d50149e3ec4740b1b1e9dca2e765e5167a35303))
* Add component input to disable microphone QUIC-693 ([#37](https://github.com/soulmachines/sm-web-component/issues/37)) ([7c8047e](https://github.com/soulmachines/sm-web-component/commit/7c8047e99e1ee8b810e2ad792f626ad0ede77f67))
* add connecting indicator slot to video component QUIC-898 ([#59](https://github.com/soulmachines/sm-web-component/issues/59)) ([c423140](https://github.com/soulmachines/sm-web-component/commit/c42314011d97eec8bdc7c27260c3fcaed6d94015))
* Add function calls to video component QUIC-536 ([6384a37](https://github.com/soulmachines/sm-web-component/commit/6384a37ec740ba9c3b5ab0017d1221d6a10274eb))
* Add loading indicator component QUIC-897  ([#55](https://github.com/soulmachines/sm-web-component/issues/55)) ([4600cd3](https://github.com/soulmachines/sm-web-component/commit/4600cd39d55a1e2cdd612782dcb1d55a8de43723))
* Add title to demo page QUIC-497 ([928d913](https://github.com/soulmachines/sm-web-component/commit/928d91368a795df08424d6c5c5c1f8ebe4415d21))
* Design simple embed snippet for use in DDNA Studio QUIC-1521 ([#121](https://github.com/soulmachines/sm-web-component/issues/121)) ([ecbe236](https://github.com/soulmachines/sm-web-component/commit/ecbe23640f1eeae6fe523493d590adf53c51b0bd))
* embed SVG in component QUIC-910 ([#58](https://github.com/soulmachines/sm-web-component/issues/58)) ([704a676](https://github.com/soulmachines/sm-web-component/commit/704a676cb3d130331aeffd0b89a56aa6941bc7a5))
* expose onSpeechMarker event QUIC-665 ([#39](https://github.com/soulmachines/sm-web-component/issues/39)) ([3f11f9c](https://github.com/soulmachines/sm-web-component/commit/3f11f9cfba588c83c53f79f20ba4b5f4ad33ea04))
* expose Web SDK QUIC-531 ([8271613](https://github.com/soulmachines/sm-web-component/commit/82716138c8fdd6a6e24da272ba3f1565519472a5))
* Expose Web SDK QUIC-531 ([5984e9a](https://github.com/soulmachines/sm-web-component/commit/5984e9aadd778a788618ce2558f05c7f3b008c27))
* Handle invalid theme input elegantly QUIC-1085 ([#106](https://github.com/soulmachines/sm-web-component/issues/106)) ([553063a](https://github.com/soulmachines/sm-web-component/commit/553063a9442685b4f983e201233c752ee5ce5397))
* host local token server for dev work ([4ae944f](https://github.com/soulmachines/sm-web-component/commit/4ae944f9a07e9e68cea64084485e2e7c45883154))
* more types, demos and readme ([d23c608](https://github.com/soulmachines/sm-web-component/commit/d23c608d57a8939ed78d0aa02764c1364a6b6cd3))
* Prevent errors accessing functions when disconnected QUIC-570 ([a301fe3](https://github.com/soulmachines/sm-web-component/commit/a301fe3fd0d6949cab48e4f1b500c857a032be40))
* Set appropriate default values for inputs QUIC-966 ([#77](https://github.com/soulmachines/sm-web-component/issues/77)) ([35e0725](https://github.com/soulmachines/sm-web-component/commit/35e072500c46e43fa94fef3d9a5b5e4913b65f6c))
* setup codeql analysis QUIC-523 ([2abecef](https://github.com/soulmachines/sm-web-component/commit/2abecef0e4ca3c93040f41b77ad881f4176acc80))
* show indicator by default QUIC-930 ([#63](https://github.com/soulmachines/sm-web-component/issues/63)) ([3738d56](https://github.com/soulmachines/sm-web-component/commit/3738d5623d2304c84899713e805e9ed5d77ae14d))
* Split relevant functionality out into Web SDK service QUIC-534 ([10c5e45](https://github.com/soulmachines/sm-web-component/commit/10c5e450a0f00cf40e99f0e2a04211cae837345a))
* surface events from SDK to web component QUIC-667 ([#38](https://github.com/soulmachines/sm-web-component/issues/38)) ([0b2710f](https://github.com/soulmachines/sm-web-component/commit/0b2710f49aa70886e0b779a1323c4876dc5c0ddf))
* Update demo files to demonstrate the default styling QUIC-1028 ([#105](https://github.com/soulmachines/sm-web-component/issues/105)) ([ebd9578](https://github.com/soulmachines/sm-web-component/commit/ebd957877390a2ab6924d19d75da0378e333ce5a))
* Update script tags in demos to use async loading QUIC-948 ([#70](https://github.com/soulmachines/sm-web-component/issues/70)) ([ab51e1e](https://github.com/soulmachines/sm-web-component/commit/ab51e1eee062e89f504b85346af8c19c89c33423))
* Update to latest stable WebSDK QUIC-1529 ([#115](https://github.com/soulmachines/sm-web-component/issues/115)) ([7f4bb2c](https://github.com/soulmachines/sm-web-component/commit/7f4bb2c067fa5dfee60c2bd78856171897424dea))
* Update/create demo to utilise functionality QUIC-538 ([e1bc2bd](https://github.com/soulmachines/sm-web-component/commit/e1bc2bdb963b5f0404a987c3649ccc830bc1a20b))
* Update/create demo to utilise functions QUIC-537 ([37d868e](https://github.com/soulmachines/sm-web-component/commit/37d868e05325dea4109cd56c55872a2e195fcb76))
* upgrade smwebsdk to 14.0.0-rc.0 to enable CUE feature ([#36](https://github.com/soulmachines/sm-web-component/issues/36)) ([d7e2e9b](https://github.com/soulmachines/sm-web-component/commit/d7e2e9b7b6f0bbd43c9f969e93c1c57d4d78fa72))
* use alternative dots animation QUIC-912 ([#61](https://github.com/soulmachines/sm-web-component/issues/61)) ([07ca896](https://github.com/soulmachines/sm-web-component/commit/07ca896da084f458d24eb85c2308f9cb11a83f17))
* Use live reloading for demo QUIC-504 ([ceee62a](https://github.com/soulmachines/sm-web-component/commit/ceee62a218d144cbf59aa03b811d350462add989))
* Use Web SDK instead of underlying calls QUIC-461 ([1a3d86e](https://github.com/soulmachines/sm-web-component/commit/1a3d86e743cd6a935c81f187f62cd9ad80dbf502))
* web component ([beacf6d](https://github.com/soulmachines/sm-web-component/commit/beacf6d41ce5f6a74cf39233fec33b8d1ec3b1ff))

# 1.0.0-alpha.1 (2021-09-29)


### Bug Fixes

* add button animation ([0272027](https://github.com/soulmachines/sm-web-component/commit/0272027a934dfb16e354f9c8db8d80f4279fa10a))
* ensure return types are passed back from the ExecuteCommand function QUIC-936 ([#64](https://github.com/soulmachines/sm-web-component/issues/64)) ([84b5b46](https://github.com/soulmachines/sm-web-component/commit/84b5b4606e78d02e8b623f902afbfe3065bc2f45))
* fix release workflow cannot find artifact error QUIC-1064 ([#90](https://github.com/soulmachines/sm-web-component/issues/90)) ([cf1be4b](https://github.com/soulmachines/sm-web-component/commit/cf1be4be6cbd75a8f015e926224ac29d7bc27360))
* fix vulnerabilities in npm dependencies QUIC-491 ([9dad04c](https://github.com/soulmachines/sm-web-component/commit/9dad04c66d12821e4a97c953dba4a25b4ef1697a))
* remove useless conditional of args QUIC-973 ([#78](https://github.com/soulmachines/sm-web-component/issues/78)) ([159a051](https://github.com/soulmachines/sm-web-component/commit/159a0514ee8c6e1dc1b2329ca5efbd36b5a87c01))
* type boolean inputs to take 'true' or 'false' string inputs QUIC-964 ([#72](https://github.com/soulmachines/sm-web-component/issues/72)) ([e252d27](https://github.com/soulmachines/sm-web-component/commit/e252d279ef7ef002efa8eb7f5d5d4f2f30dc5072))
* Use consistent casing for inputs QUIC-965 ([#73](https://github.com/soulmachines/sm-web-component/issues/73)) ([2d9b5c8](https://github.com/soulmachines/sm-web-component/commit/2d9b5c8f7ab241ea92a09bb2bc4f8c5559595a06))
* webSDKService to be public to be used in html file ([4e7ded0](https://github.com/soulmachines/sm-web-component/commit/4e7ded058b61d3bcf94767025cfab779a7220dd0))


### Features

* Add component input to disable microphone QUIC-693 ([#37](https://github.com/soulmachines/sm-web-component/issues/37)) ([7c8047e](https://github.com/soulmachines/sm-web-component/commit/7c8047e99e1ee8b810e2ad792f626ad0ede77f67))
* add connecting indicator slot to video component QUIC-898 ([#59](https://github.com/soulmachines/sm-web-component/issues/59)) ([c423140](https://github.com/soulmachines/sm-web-component/commit/c42314011d97eec8bdc7c27260c3fcaed6d94015))
* Add function calls to video component QUIC-536 ([6384a37](https://github.com/soulmachines/sm-web-component/commit/6384a37ec740ba9c3b5ab0017d1221d6a10274eb))
* Add loading indicator component QUIC-897  ([#55](https://github.com/soulmachines/sm-web-component/issues/55)) ([4600cd3](https://github.com/soulmachines/sm-web-component/commit/4600cd39d55a1e2cdd612782dcb1d55a8de43723))
* Add title to demo page QUIC-497 ([928d913](https://github.com/soulmachines/sm-web-component/commit/928d91368a795df08424d6c5c5c1f8ebe4415d21))
* embed SVG in component QUIC-910 ([#58](https://github.com/soulmachines/sm-web-component/issues/58)) ([704a676](https://github.com/soulmachines/sm-web-component/commit/704a676cb3d130331aeffd0b89a56aa6941bc7a5))
* expose onSpeechMarker event QUIC-665 ([#39](https://github.com/soulmachines/sm-web-component/issues/39)) ([3f11f9c](https://github.com/soulmachines/sm-web-component/commit/3f11f9cfba588c83c53f79f20ba4b5f4ad33ea04))
* expose Web SDK QUIC-531 ([8271613](https://github.com/soulmachines/sm-web-component/commit/82716138c8fdd6a6e24da272ba3f1565519472a5))
* Expose Web SDK QUIC-531 ([5984e9a](https://github.com/soulmachines/sm-web-component/commit/5984e9aadd778a788618ce2558f05c7f3b008c27))
* host local token server for dev work ([4ae944f](https://github.com/soulmachines/sm-web-component/commit/4ae944f9a07e9e68cea64084485e2e7c45883154))
* more types, demos and readme ([d23c608](https://github.com/soulmachines/sm-web-component/commit/d23c608d57a8939ed78d0aa02764c1364a6b6cd3))
* Prevent errors accessing functions when disconnected QUIC-570 ([a301fe3](https://github.com/soulmachines/sm-web-component/commit/a301fe3fd0d6949cab48e4f1b500c857a032be40))
* Set appropriate default values for inputs QUIC-966 ([#77](https://github.com/soulmachines/sm-web-component/issues/77)) ([35e0725](https://github.com/soulmachines/sm-web-component/commit/35e072500c46e43fa94fef3d9a5b5e4913b65f6c))
* setup codeql analysis QUIC-523 ([2abecef](https://github.com/soulmachines/sm-web-component/commit/2abecef0e4ca3c93040f41b77ad881f4176acc80))
* show indicator by default QUIC-930 ([#63](https://github.com/soulmachines/sm-web-component/issues/63)) ([3738d56](https://github.com/soulmachines/sm-web-component/commit/3738d5623d2304c84899713e805e9ed5d77ae14d))
* Split relevant functionality out into Web SDK service QUIC-534 ([10c5e45](https://github.com/soulmachines/sm-web-component/commit/10c5e450a0f00cf40e99f0e2a04211cae837345a))
* surface events from SDK to web component QUIC-667 ([#38](https://github.com/soulmachines/sm-web-component/issues/38)) ([0b2710f](https://github.com/soulmachines/sm-web-component/commit/0b2710f49aa70886e0b779a1323c4876dc5c0ddf))
* Update script tags in demos to use async loading QUIC-948 ([#70](https://github.com/soulmachines/sm-web-component/issues/70)) ([ab51e1e](https://github.com/soulmachines/sm-web-component/commit/ab51e1eee062e89f504b85346af8c19c89c33423))
* Update/create demo to utilise functionality QUIC-538 ([e1bc2bd](https://github.com/soulmachines/sm-web-component/commit/e1bc2bdb963b5f0404a987c3649ccc830bc1a20b))
* Update/create demo to utilise functions QUIC-537 ([37d868e](https://github.com/soulmachines/sm-web-component/commit/37d868e05325dea4109cd56c55872a2e195fcb76))
* upgrade smwebsdk to 14.0.0-rc.0 to enable CUE feature ([#36](https://github.com/soulmachines/sm-web-component/issues/36)) ([d7e2e9b](https://github.com/soulmachines/sm-web-component/commit/d7e2e9b7b6f0bbd43c9f969e93c1c57d4d78fa72))
* use alternative dots animation QUIC-912 ([#61](https://github.com/soulmachines/sm-web-component/issues/61)) ([07ca896](https://github.com/soulmachines/sm-web-component/commit/07ca896da084f458d24eb85c2308f9cb11a83f17))
* Use live reloading for demo QUIC-504 ([ceee62a](https://github.com/soulmachines/sm-web-component/commit/ceee62a218d144cbf59aa03b811d350462add989))
* Use Web SDK instead of underlying calls QUIC-461 ([1a3d86e](https://github.com/soulmachines/sm-web-component/commit/1a3d86e743cd6a935c81f187f62cd9ad80dbf502))
* web component ([beacf6d](https://github.com/soulmachines/sm-web-component/commit/beacf6d41ce5f6a74cf39233fec33b8d1ec3b1ff))
