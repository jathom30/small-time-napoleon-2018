import React from 'react'

const CD = (props) => {
  return(
    <div className="cd-disc" 
      onMouseEnter={props.hoverAlbum}
      onMouseLeave={props.unhoverAlbum}
      onClick={props.showMusicDetails} 
      >
      <svg id="cd" xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144">
        <linearGradient id="a" x1="22.067" x2="121.934" y1="22.067" y2="121.934" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#26232a"/>
          <stop offset="1" stopColor="#262355"/>
        </linearGradient>
        <path fill="url(#a)" d="M72 142.61c-38.94 0-70.62-31.675-70.62-70.61 0-18.85 7.347-36.583 20.687-49.934C35.411 8.733 53.145 1.39 72 1.39c38.94 0 70.62 31.675 70.62 70.61 0 18.85-7.347 36.583-20.687 49.934C108.589 135.267 90.855 142.61 72 142.61zm0-78.68c-4.45 0-8.07 3.62-8.07 8.07s3.62 8.07 8.07 8.07 8.07-3.62 8.07-8.07-3.62-8.07-8.07-8.07z"/>
        <g id="label-and-grooves">
          <g id="label">
            <path fill="#5D5B7F" d="M72 1.89c38.72 0 70.12 31.39 70.12 70.11 0 19.37-7.86 36.89-20.54 49.58-12.69 12.68-30.21 20.53-49.58 20.53-38.72 0-70.12-31.39-70.12-70.11 0-19.37 7.86-36.89 20.54-49.58C35.11 9.74 52.63 1.89 72 1.89m0 78.68c4.73 0 8.57-3.84 8.57-8.57s-3.84-8.57-8.57-8.57-8.57 3.84-8.57 8.57 3.84 8.57 8.57 8.57M72 .89c-18.989 0-36.848 7.395-50.287 20.822C8.278 35.158.88 53.017.88 72c0 39.21 31.904 71.11 71.12 71.11 18.989 0 36.848-7.395 50.287-20.822C135.722 108.842 143.12 90.983 143.12 72 143.12 32.79 111.216.89 72 .89zm0 78.68c-4.174 0-7.57-3.396-7.57-7.57s3.396-7.57 7.57-7.57 7.57 3.396 7.57 7.57-3.396 7.57-7.57 7.57z"/>
            <path fill="#7269FF" d="M72 49.31c-12.53 0-22.69 10.16-22.69 22.69S59.47 94.69 72 94.69 94.69 84.53 94.69 72 84.53 49.31 72 49.31zm0 31.26c-4.73 0-8.57-3.84-8.57-8.57s3.84-8.57 8.57-8.57 8.57 3.84 8.57 8.57-3.84 8.57-8.57 8.57z"/>
            <path fill="#F2F2F2" d="M63.943 55.198a.908.908 0 0 1 .401.757.884.884 0 0 1-.284.654.974.974 0 0 1-.294.187.872.872 0 0 1-.601.028.886.886 0 0 1-.247-.117l.054-.077c.071.05.146.086.222.108a.782.782 0 0 0 .507-.015.861.861 0 0 0 .434-.352.805.805 0 0 0 .103-.279l-.921-.618a.601.601 0 0 1-.195-.224.644.644 0 0 1-.07-.288.601.601 0 0 1 .192-.437.65.65 0 0 1 .196-.126.602.602 0 0 1 .57.058l-.055.077a.442.442 0 0 0-.139-.066.542.542 0 0 0-.405.045.481.481 0 0 0-.195.19l.727.495zm1.926.269a1.975 1.975 0 0 0-.132.724h-.092a2.014 2.014 0 0 0-.499-1.333v1.968h-.516v-2.509c.128.078.25.166.362.264a2.057 2.057 0 0 1 .697 1.166 1.99 1.99 0 0 1 .155-.456 2.13 2.13 0 0 1 .543-.71 2.64 2.64 0 0 1 .364-.264v2.509h-.519v-1.968a2.094 2.094 0 0 0-.363.609zm2.201-1.117h-.57l.24.58-.74 1.9h.1l.28-.73h.86l.31.73h.57l-1.05-2.48zm-.65 1.66l.37-.95.41.95h-.78zm3.601.722v.094h-1.659v-2.473h.519v2.379h1.14zm1.899 0v.094h-1.657v-2.473h.52v2.379h1.137zm2.375.095h-.515v-2.379h-.727v-.094h1.968v.094h-.727v2.379zm1.488 0h-.519v-2.476h.519v2.476zm1.482-1.36a1.976 1.976 0 0 0-.134.724h-.091c0-.254-.045-.495-.131-.724a2.079 2.079 0 0 0-.367-.609v1.968h-.519v-2.509a2.7 2.7 0 0 1 .364.264 2.175 2.175 0 0 1 .548.714c.064.14.115.291.148.452.037-.164.088-.316.153-.456a2.198 2.198 0 0 1 .544-.71c.114-.098.234-.186.366-.264v2.509h-.519v-1.968a2.092 2.092 0 0 0-.362.609zm1.642-.72h1.399v.095h-1.399v1.891H81v.094h-1.611v-2.473H81v.094h-1.093v.299z"/>
            <path fill="none" stroke="#F2F2F2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth=".25" d="M60.319 57.541h23.635"/>
            <path fill="#F2F2F2" d="M71.95 59.4c-.12-.25-.28-.46-.48-.65s-.439-.33-.71-.44a2.286 2.286 0 0 0-1.729 0c-.271.11-.511.25-.71.44-.2.19-.36.4-.48.65a1.997 1.997 0 0 0 0 1.61c.12.25.28.47.48.65.199.19.439.33.71.44a2.272 2.272 0 0 0 1.729 0c.271-.11.51-.25.71-.44.2-.18.36-.4.48-.65a1.98 1.98 0 0 0 0-1.61zm-.15 1.55c-.109.23-.26.43-.45.6-.189.17-.399.31-.649.41a2.166 2.166 0 0 1-1.481.04c-.22-.06-.41-.16-.59-.29V58.7c.18-.13.37-.23.59-.29a2.166 2.166 0 0 1 1.481.04c.25.1.46.23.649.41.19.17.341.37.45.6.11.23.16.48.16.74 0 .27-.05.52-.16.75zm3.486 1.158v.157h-2.764v-4.121h.864v3.964h1.9zm1.269-3.308h2.332v.157h-2.332v3.15h1.821v.157h-2.684v-4.121h2.684v.157h-1.821v.5zm7.015.6c-.12-.25-.28-.46-.48-.65s-.439-.33-.71-.44a2.274 2.274 0 0 0-1.729 0c-.271.11-.511.25-.71.44-.2.19-.36.4-.48.65a1.98 1.98 0 0 0 0 1.61c.12.25.28.47.48.65.199.19.439.33.71.44a2.285 2.285 0 0 0 1.729 0c.271-.11.51-.25.71-.44.2-.18.36-.4.48-.65a1.98 1.98 0 0 0 0-1.61zm-.15 1.55c-.11.23-.26.43-.45.6-.18.17-.399.31-.649.41s-.521.15-.801.15c-.239 0-.47-.04-.68-.11-.22-.06-.41-.16-.59-.29V58.7c.18-.13.37-.23.59-.29.21-.07.44-.11.68-.11.28 0 .551.05.801.15.25.1.47.23.649.41.19.17.34.37.45.6s.16.48.16.74c0 .27-.05.52-.16.75zm4.105-2.806h.151v4.121h-.388l-2.988-2.91v2.91h-.156v-4.121h.292l3.089 2.955v-2.955zm-27.822 0h.15v4.121h-.385l-2.988-2.91v2.91h-.157v-4.121h.29l3.09 2.955v-2.955zm2.337-.004h-.95l.42.97-1.25 3.16h.17l.471-1.22h1.43l.52 1.22h.95l-1.761-4.13zm-1.08 2.76l.63-1.58.68 1.58h-1.31zm6.18-1.82a1.5 1.5 0 0 0-.319-.49 1.689 1.689 0 0 0-.49-.32c-.19-.09-.38-.13-.59-.13-.24 0-.471.06-.681.16-.21.11-.39.25-.529.44l-.17-.62-.16.02v4.13h.87v-1.22c.1.05.199.09.319.12.11.02.23.04.351.04.2 0 .399-.04.59-.13.189-.08.35-.18.49-.32s.239-.3.319-.49c.091-.19.12-.39.12-.6 0-.2-.03-.4-.12-.59zM67 60.21c-.07.17-.17.31-.29.44-.13.12-.27.22-.44.29a1.2 1.2 0 0 1-.529.11c-.12 0-.24-.01-.351-.04-.12-.04-.22-.08-.319-.13v-2.41a1.358 1.358 0 0 1 1.199-.06c.171.07.311.17.44.3.12.12.22.26.29.43.08.17.11.34.11.53 0 .2-.03.37-.11.54z"/>
            <path fill="#FFF" d="M60.999 84.862v2.07h-.448v-2.07h-.632v-.082h1.713v.082h-.633zm1.184.233c.228-.21.501-.315.821-.315s.594.105.821.315.341.463.341.76a1 1 0 0 1-.341.763c-.228.209-.501.314-.821.314s-.594-.105-.821-.314a.998.998 0 0 1-.341-.763c0-.297.113-.55.341-.76zm.16-.025v1.572a1.1 1.1 0 0 0 .661.208c.297 0 .551-.097.763-.291a.92.92 0 0 0 .317-.704c0-.273-.105-.507-.317-.701s-.466-.292-.763-.292c-.248 0-.469.07-.661.208zm2.375.025c.228-.21.501-.315.821-.315s.594.105.821.315.341.463.341.76a1 1 0 0 1-.341.763c-.228.209-.501.314-.821.314s-.594-.105-.821-.314a.998.998 0 0 1-.341-.763c0-.297.113-.55.341-.76zm.16-.025v1.572a1.1 1.1 0 0 0 .661.208c.297 0 .551-.097.763-.291a.92.92 0 0 0 .317-.704c0-.273-.105-.507-.317-.701s-.466-.292-.763-.292c-.248 0-.469.07-.661.208zm3.261 1.801v.062h-.451V85.27c0-.133.048-.248.145-.344s.212-.145.345-.145c.134 0 .25.048.347.144s.145.211.145.346c0 .07-.015.137-.044.199.162.045.295.134.398.268s.155.285.155.452a.713.713 0 0 1-.22.524.72.72 0 0 1-.527.22.748.748 0 0 1-.293-.063zm0-.091c.087.047.185.07.292.07a.638.638 0 0 0 .47-.195.634.634 0 0 0 .195-.467c0-.176-.056-.322-.167-.439s-.255-.192-.431-.226a.477.477 0 0 0 .088-.254c0-.111-.04-.207-.12-.287s-.177-.12-.289-.12h-.038v1.918zm1.701-2.003v2.155h-.451v-2.155h.451zm1.861 1.965v-1.537h-.387v-.082h.837v1.78h-.079l-.073-.258a1.162 1.162 0 0 1-.787.287c-.309 0-.579-.104-.812-.31a.987.987 0 0 1-.35-.767c0-.295.114-.548.343-.761a1.17 1.17 0 0 1 .819-.313c.195 0 .379.043.551.129l-.035.073a1.163 1.163 0 0 0-.516-.12 1.1 1.1 0 0 0-.661.208v1.572a1.1 1.1 0 0 0 .661.208 1.13 1.13 0 0 0 .489-.109zm2.517-1.88v2.07h-.448v-2.07h-.632v-.082h1.713v.082h-.633zm1.183.233c.228-.21.501-.315.821-.315s.594.105.821.315.341.463.341.76a1 1 0 0 1-.341.763c-.228.209-.501.314-.821.314s-.594-.105-.821-.314a.998.998 0 0 1-.341-.763c.001-.297.114-.55.341-.76zm.161-.025v1.572a1.1 1.1 0 0 0 .661.208c.297 0 .551-.097.763-.291a.92.92 0 0 0 .317-.704c0-.273-.105-.507-.317-.701s-.466-.292-.763-.292c-.248 0-.469.07-.661.208zm3.26-.208v.261h1.218v.082h-1.218v1.727h-.451V84.78h1.402v.082h-.951zm1.091 2.07l.652-1.648-.215-.504h.497l.916 2.152h-.497l-.27-.632h-.746l-.249.632h-.088zm.696-1.54l-.327.826h.682l-.355-.826zm1.816-.615v2.155h-.451v-2.155h.451zm.661 2.073h.992v.082h-1.443V84.78h.451v2.07z"/>
            <path fill="#BAB5FF" d="M72 63.434c-4.731 0-8.566 3.835-8.566 8.566s3.835 8.566 8.566 8.566 8.566-3.835 8.566-8.566-3.835-8.566-8.566-8.566zm0 10.6c-1.128 0-2.033-.906-2.033-2.034s.905-2.034 2.033-2.034 2.033.907 2.033 2.034-.905 2.034-2.033 2.034z"/>
          </g>
          <g id="grooves" fill="#5D5B7F">
            <path d="M9.657 72l.001-1.1c.021-.717-.049-1.77.06-3.109l.13-2.22.282-2.604a60.327 60.327 0 0 1 1.119-6.186c.261-1.123.603-2.275.926-3.476.402-1.176.745-2.419 1.232-3.649.892-2.493 2.063-5.033 3.401-7.593a69.807 69.807 0 0 1 4.771-7.518 69.883 69.883 0 0 1 5.984-6.983 69.64 69.64 0 0 1 6.982-5.985 69.457 69.457 0 0 1 7.518-4.771c2.56-1.338 5.099-2.512 7.593-3.402 1.229-.488 2.473-.831 3.648-1.233 1.201-.323 2.354-.665 3.477-.926a60.034 60.034 0 0 1 6.186-1.118l2.604-.283 2.219-.13c1.338-.108 2.395-.037 3.111-.059h1.1l-1.099.055c-.716.053-1.769.048-3.099.199l-2.204.21-2.578.376a75.558 75.558 0 0 0-6.103 1.295c-1.106.284-2.24.648-3.421.994-1.155.425-2.376.791-3.581 1.3-2.444.934-4.916 2.161-7.438 3.482a68.85 68.85 0 0 0-7.375 4.758 69.358 69.358 0 0 0-6.833 5.942 68.623 68.623 0 0 0-5.942 6.833 68.85 68.85 0 0 0-4.758 7.375c-1.321 2.522-2.551 4.994-3.483 7.438-.51 1.205-.875 2.426-1.3 3.582-.346 1.181-.71 2.315-.993 3.421a75.592 75.592 0 0 0-1.296 6.103l-.376 2.579-.21 2.202c-.15 1.329-.146 2.386-.199 3.101L9.657 72zm124.686 0l-.001 1.1c-.021.717.049 1.77-.06 3.109l-.13 2.22-.282 2.604a60.327 60.327 0 0 1-1.119 6.186c-.261 1.123-.603 2.275-.926 3.476-.402 1.176-.745 2.419-1.232 3.649-.892 2.493-2.063 5.033-3.401 7.593a69.807 69.807 0 0 1-4.771 7.518 69.883 69.883 0 0 1-5.984 6.983 69.64 69.64 0 0 1-6.982 5.985 69.457 69.457 0 0 1-7.518 4.771c-2.56 1.338-5.099 2.512-7.593 3.402-1.229.488-2.473.831-3.648 1.233-1.201.323-2.354.665-3.477.926-2.245.531-4.331.88-6.186 1.118l-2.604.283-2.219.13c-1.338.108-2.395.037-3.111.059h-1.1l1.099-.055c.716-.053 1.769-.048 3.099-.199l2.204-.21 2.578-.376a75.558 75.558 0 0 0 6.103-1.295c1.106-.284 2.24-.648 3.421-.994 1.155-.425 2.376-.791 3.581-1.3 2.444-.934 4.916-2.161 7.438-3.482a68.85 68.85 0 0 0 7.375-4.758 69.358 69.358 0 0 0 6.833-5.942 68.623 68.623 0 0 0 5.942-6.833 68.85 68.85 0 0 0 4.758-7.375c1.321-2.522 2.551-4.994 3.483-7.438.51-1.205.875-2.426 1.3-3.582.346-1.181.71-2.315.993-3.421a75.592 75.592 0 0 0 1.296-6.103l.376-2.579.21-2.202c.15-1.329.146-2.386.199-3.101l.056-1.1z"/>
            <path d="M15.393 72l.096-3.82.065-2.012.311-2.358.355-2.689c.042-.479.164-.953.286-1.438l.364-1.493.781-3.173 1.162-3.3.607-1.723c.227-.573.515-1.128.773-1.703l1.657-3.492c1.387-2.225 2.642-4.646 4.382-6.795 1.553-2.288 3.523-4.291 5.386-6.385 2.092-1.864 4.096-3.833 6.384-5.386 2.148-1.74 4.569-2.996 6.795-4.382l3.492-1.658c.575-.259 1.13-.547 1.703-.774l1.723-.607 3.301-1.162 3.174-.781 1.492-.364c.486-.122.96-.245 1.437-.287l2.686-.355 2.356-.311 2.018-.065L72 15.392l-3.809.29-2.002.146-2.332.405-2.646.459c-.935.14-1.879.478-2.885.724l-3.118.849-3.231 1.229-1.685.64c-.56.237-1.101.536-1.66.806l-3.419 1.674c-2.181 1.386-4.554 2.637-6.653 4.368-2.238 1.544-4.189 3.501-6.234 5.344-1.844 2.043-3.801 3.995-5.345 6.234-1.731 2.1-2.982 4.473-4.368 6.653l-1.675 3.419c-.27.56-.568 1.101-.806 1.661l-.64 1.684-1.229 3.232-.849 3.118c-.246 1.005-.583 1.951-.724 2.884a7397.33 7397.33 0 0 1-.862 4.973c-.054.73-.103 1.402-.146 2.008L15.393 72z"/>
            <path d="M23.511 72l.068-3.272.05-1.724.26-2.022.297-2.307c.087-.818.364-1.636.553-2.514l.664-2.722.99-2.832.518-1.479c.193-.492.439-.968.661-1.462l1.418-2.996c1.188-1.91 2.263-3.987 3.754-5.831 1.331-1.963 3.02-3.683 4.616-5.479 1.796-1.598 3.517-3.286 5.479-4.617 1.844-1.491 3.921-2.567 5.831-3.754l2.996-1.419c.493-.221.97-.467 1.462-.661l1.479-.518 2.832-.99 2.723-.664c.877-.188 1.697-.465 2.513-.552.811-.104 1.579-.204 2.303-.296l2.02-.26 1.729-.05L72 23.511l-3.262.262-1.714.13-1.995.353-2.264.401c-.801.123-1.608.412-2.469.625l-2.667.732-2.763 1.058-1.44.551c-.478.204-.94.46-1.419.692l-2.924 1.436c-1.864 1.187-3.894 2.259-5.688 3.741-1.914 1.322-3.581 2.998-5.329 4.575-1.579 1.746-3.254 3.415-4.576 5.329-1.481 1.794-2.553 3.824-3.74 5.688l-1.437 2.923c-.231.479-.488.941-.692 1.419l-.55 1.44-1.058 2.764-.732 2.667c-.213.86-.502 1.669-.625 2.467l-.4 2.26-.353 1.994-.131 1.72L23.511 72zm96.978 0l-.068 3.272-.05 1.724-.26 2.022-.297 2.307c-.087.818-.364 1.636-.553 2.514l-.664 2.722-.99 2.832-.518 1.479c-.193.492-.439.968-.661 1.462l-1.418 2.997c-1.188 1.909-2.263 3.987-3.754 5.831-1.331 1.963-3.02 3.683-4.616 5.479-1.796 1.599-3.517 3.286-5.479 4.617-1.844 1.491-3.921 2.567-5.831 3.754l-2.996 1.419c-.493.221-.97.467-1.462.661l-1.479.518-2.832.99-2.723.664c-.877.188-1.697.465-2.513.552l-2.302.296-2.021.26-1.729.05-3.273.067 3.262-.262 1.714-.13 1.995-.354 2.264-.4c.801-.123 1.608-.412 2.469-.625l2.667-.732 2.763-1.058 1.44-.551c.478-.204.94-.46 1.419-.692l2.924-1.435c1.864-1.188 3.894-2.259 5.688-3.741 1.914-1.322 3.582-2.998 5.329-4.575 1.579-1.747 3.254-3.415 4.576-5.329 1.481-1.795 2.553-3.824 3.74-5.688l1.437-2.923c.231-.479.488-.941.692-1.419l.55-1.44 1.058-2.764.732-2.667c.213-.86.502-1.669.625-2.467l.4-2.26.353-1.994.131-1.72.261-3.263z"/>
            <path d="M116.782 72l-.056 3.023-.043 1.592-.236 1.868-.271 2.132c-.078.756-.335 1.512-.507 2.323l-.611 2.516-.912 2.618c-.156.45-.315.906-.477 1.367-.178.455-.405.895-.609 1.352l-1.309 2.771c-1.097 1.765-2.091 3.686-3.468 5.39-1.229 1.815-2.79 3.405-4.265 5.066-1.66 1.478-3.251 3.036-5.066 4.266-1.705 1.377-3.625 2.371-5.391 3.468l-2.77 1.31c-.457.204-.897.431-1.352.609l-1.368.477-2.617.912-2.517.611c-.811.172-1.568.428-2.322.507l-2.128.27-1.867.236-1.598.043-3.022.056 3.012-.25 1.582-.124 1.842-.33 2.09-.374c.738-.115 1.483-.382 2.277-.581l2.461-.678 2.55-.979 1.328-.51c.441-.189.868-.426 1.31-.641l2.697-1.326c1.72-1.097 3.592-2.086 5.248-3.455 1.766-1.22 3.304-2.768 4.916-4.223 1.457-1.611 3.004-3.15 4.225-4.916 1.368-1.656 2.357-3.528 3.454-5.248l1.327-2.697c.214-.442.452-.869.641-1.31l.51-1.329.979-2.55.679-2.461c.198-.793.465-1.541.58-2.276l.374-2.085.329-1.84.124-1.588c.156-1.916.247-3.012.247-3.012z"/>
            <path d="M109.017 72l-.029 2.5-.028 1.316-.188 1.547-.215 1.767c-.062.626-.272 1.252-.412 1.924l-.499 2.085-.748 2.169-.392 1.134c-.146.377-.333.742-.501 1.121-.354.75-.714 1.517-1.08 2.296-.907 1.463-1.729 3.055-2.868 4.468-1.017 1.504-2.308 2.823-3.528 4.201-1.377 1.223-2.696 2.512-4.2 3.53-1.414 1.139-3.006 1.961-4.469 2.868l-2.296 1.081c-.379.168-.744.354-1.121.501l-1.134.391-2.17.748-2.085.499c-.671.14-1.299.351-1.923.413l-1.763.214-1.545.187-1.322.029-2.501.029 2.488-.223 1.307-.109 1.521-.281c.541-.1 1.116-.207 1.724-.318.609-.098 1.224-.32 1.879-.486l2.029-.567 2.102-.815 1.095-.424c.363-.157.714-.354 1.078-.532l2.224-1.098c1.418-.906 2.961-1.724 4.325-2.854 1.456-1.008 2.723-2.286 4.051-3.487 1.203-1.327 2.479-2.595 3.488-4.051 1.131-1.364 1.948-2.908 2.854-4.326l1.099-2.223c.178-.364.375-.715.532-1.079l.424-1.095.814-2.102.567-2.03c.166-.654.388-1.271.486-1.877l.317-1.72.28-1.519.109-1.312.224-2.49zm-74.034 0l.029-2.5.028-1.316.188-1.547.215-1.767c.062-.626.272-1.252.412-1.924l.499-2.085.748-2.169.392-1.134c.146-.377.333-.742.501-1.121.354-.75.714-1.517 1.08-2.296.907-1.463 1.729-3.055 2.868-4.468 1.017-1.504 2.308-2.823 3.529-4.201 1.376-1.223 2.695-2.512 4.2-3.529 1.413-1.14 3.005-1.961 4.468-2.868l2.296-1.082c.379-.167.744-.354 1.121-.5l1.134-.391 2.17-.748 2.085-.499c.671-.14 1.299-.351 1.923-.413l1.763-.214 1.545-.187 1.322-.029L72 34.984l-2.488.223-1.307.109-1.521.281c-.541.1-1.116.207-1.724.318-.609.098-1.224.32-1.879.486l-2.029.566-2.102.815-1.095.424c-.363.157-.714.354-1.078.532l-2.224 1.098c-1.418.906-2.961 1.724-4.325 2.854-1.456 1.008-2.723 2.286-4.051 3.487-1.203 1.327-2.479 2.595-3.488 4.05-1.131 1.364-1.948 2.908-2.854 4.326l-1.099 2.223c-.178.364-.375.715-.532 1.079l-.424 1.095-.814 2.102-.567 2.03c-.166.654-.388 1.271-.486 1.877l-.317 1.72-.28 1.519-.109 1.312-.224 2.49z"/>
            <path d="M99.418 72l.003 1.853-.01.976-.127 1.149-.146 1.314c-.041.467-.196.932-.296 1.432l-.361 1.551-.546 1.616c-.323 1.132-.923 2.223-1.444 3.394-.67 1.09-1.265 2.286-2.118 3.335-.76 1.118-1.722 2.098-2.632 3.122-1.022.912-2.003 1.873-3.121 2.633-1.048.854-2.244 1.449-3.335 2.118-1.171.522-2.261 1.123-3.394 1.446l-1.616.545-1.552.36c-.499.101-.966.255-1.43.296l-1.311.145-1.148.126-.98.011L72 99.418l1.841-.19.967-.091 1.122-.22c.801-.153 1.703-.313 2.658-.619l1.496-.429 1.548-.613a11.292 11.292 0 0 0 1.599-.717l1.634-.821c1.044-.673 2.17-1.293 3.18-2.12 1.074-.741 2.009-1.681 2.99-2.565.885-.98 1.824-1.916 2.565-2.99.828-1.009 1.446-2.135 2.12-3.179l.821-1.634c.294-.524.518-1.064.717-1.6l.612-1.548c.147-.517.291-1.017.429-1.496.305-.957.465-1.853.617-2.652l.221-1.121.091-.972.19-1.841zm-54.836 0l-.003-1.853.01-.976.127-1.149.146-1.314c.041-.467.196-.932.296-1.432l.361-1.551.546-1.616c.323-1.132.923-2.223 1.444-3.394.67-1.09 1.265-2.286 2.118-3.335.76-1.118 1.722-2.098 2.632-3.121 1.022-.912 2.003-1.873 3.121-2.633 1.048-.854 2.245-1.449 3.335-2.119 1.171-.521 2.261-1.122 3.394-1.445l1.616-.545 1.552-.36c.499-.101.966-.255 1.43-.296l1.311-.145 1.148-.126.98-.011 1.854.003-1.841.19-.967.091-1.122.22c-.801.153-1.703.313-2.658.619l-1.496.429-1.548.613c-.534.199-1.075.423-1.599.717l-1.634.821c-1.044.673-2.17 1.293-3.179 2.12-1.075.741-2.01 1.681-2.991 2.564-.885.98-1.824 1.917-2.565 2.99-.828 1.009-1.446 2.135-2.12 3.179l-.821 1.634a11.191 11.191 0 0 0-.717 1.599l-.612 1.548c-.147.517-.291 1.017-.429 1.496-.305.957-.465 1.853-.617 2.652l-.221 1.121-.091.972-.19 1.843z"/>
          </g>
        </g>
        <g id="shine">
          <linearGradient id="b" x1="66.59" x2="111.598" y1="110.023" y2="97.139" gradientUnits="userSpaceOnUse">
            <stop offset=".233" stopColor="#bab5ff" stopOpacity="0"/>
            <stop offset="1" stopColor="#bab5ff"/>
          </linearGradient>
          <path fill="url(#b)" d="M121.577 121.578C108.89 134.265 91.367 142.115 72 142.115V72l49.577 49.578z"/>
          <linearGradient id="c" x1="66.59" x2="111.598" y1="110.023" y2="97.139" gradientTransform="rotate(180 72 72)" gradientUnits="userSpaceOnUse">
            <stop offset=".233" stopColor="#bab5ff" stopOpacity="0"/>
            <stop offset="1" stopColor="#bab5ff"/>
          </linearGradient>
          <path fill="url(#c)" d="M22.423 22.422C35.109 9.736 52.633 1.885 72 1.885V72L22.423 22.422z"/>
          <linearGradient id="d" x1="66.589" x2="111.598" y1="110.022" y2="97.137" gradientTransform="matrix(0 -1 -1 0 144 144)" gradientUnits="userSpaceOnUse">
            <stop offset=".233" stopColor="#bab5ff" stopOpacity="0"/>
            <stop offset="1" stopColor="#bab5ff"/>
          </linearGradient>
          <path fill="url(#d)" d="M22.422 22.421C9.736 35.108 1.887 52.631 1.885 72H72L22.422 22.421z"/>
          <linearGradient id="e" x1="66.59" x2="111.599" y1="110.023" y2="97.138" gradientTransform="matrix(0 1 1 0 0 0)" gradientUnits="userSpaceOnUse">
            <stop offset=".233" stopColor="#bab5ff" stopOpacity="0"/>
            <stop offset="1" stopColor="#bab5ff"/>
          </linearGradient>
          <path fill="url(#e)" d="M121.578 121.579c12.686-12.687 20.535-30.21 20.537-49.579H72l49.578 49.579z"/>
        </g>
      </svg>

      <div className={`arrow ${props.album ? 'up' : 'down'}`}></div>
    </div>
  )
}

export default CD