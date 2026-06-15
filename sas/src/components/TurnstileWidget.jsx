import { useEffect, useRef } from 'react';

const SCRIPT_ID = 'cf-turnstile-script';

function ensureScript() {
  if (document.getElementById(SCRIPT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

function TurnstileWidget({ siteKey, onToken, onExpire, onError }) {
  const containerRef = useRef(null);

  useEffect(() => {
    ensureScript();

    let cancelled = false;

    function tryRender() {
      if (cancelled || !containerRef.current || !window.turnstile || !siteKey) {
        return false;
      }

      window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        action: 'turnstile-spin-v1',
        callback: onToken,
        'expired-callback': onExpire,
        'error-callback': onError
      });

      return true;
    }

    if (!tryRender()) {
      const intervalId = window.setInterval(() => {
        if (tryRender()) {
          window.clearInterval(intervalId);
        }
      }, 250);

      return () => {
        cancelled = true;
        window.clearInterval(intervalId);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [onError, onExpire, onToken, siteKey]);

  return <div ref={containerRef} className="sas-turnstile-slot" />;
}

export default TurnstileWidget;