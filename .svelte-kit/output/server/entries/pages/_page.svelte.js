import { c as pop, p as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="flex flex-col justify-center items-center w-screen h-screen bg-[url('/hero.jpg')] bg-cover bg-center">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
