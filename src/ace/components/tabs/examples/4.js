import {EVENTS} from '/ace/components/tabs/tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  const tabsEl = document.getElementById('ace-tabs-custom');
  const setTabForm = document.getElementById('set-tab-form');

  window.addEventListener('click', (e) => {
    if (e.target.id === 'prev-tab-btn') {
      tabsEl.dispatchEvent(new CustomEvent(EVENTS.IN.SET_PREV_TAB));
    } else if (e.target.id === 'next-tab-btn') {
      tabsEl.dispatchEvent(new CustomEvent(EVENTS.IN.SET_NEXT_TAB));
    }
  });

  setTabForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    tabsEl.dispatchEvent(new CustomEvent(EVENTS.IN.SET_TAB, {
      detail: {
        tab: +formData.get('tab-number')
      }
    }));
  });
});