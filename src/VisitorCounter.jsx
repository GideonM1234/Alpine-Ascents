import React from "react";

const VisitorCounter = () => {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `
          <script type="text/javascript">
            var _Hasync = _Hasync || [];
            _Hasync.push(['Histats.start', '1,XXXXXXX,4,0,0,0,00000000']);
            _Hasync.push(['Histats.fasi', '1']);
            _Hasync.push(['Histats.track_hits', '']);
            (function() {
              var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
              hs.src = ('//s10.histats.com/js15_as.js');
              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
            })();
          </script>
          <noscript><a href="/" target="_blank">
          <img src="//sstatic1.histats.com/0.gif?XXXXXXX&101" alt="free hit counter" border="0">
          </a></noscript>
        `,
			}}
		/>
	);
};

export default VisitorCounter;
