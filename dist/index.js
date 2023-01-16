var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import tippy from 'tippy.js';
tippy('#button', {
    trigger: 'click',
    content: 'copiado!',
    placement: 'bottom'
});
const button = document.getElementById('button');
button.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    let linkText = document.querySelector('.server-address');
    yield navigator.clipboard.writeText(linkText.innerText);
});
