export function enable_submit_btns() {
  document.querySelectorAll('[type=submit], [type=button]:not([data-disabled])').forEach(btn => {
    btn.disabled = false;
  });
}
