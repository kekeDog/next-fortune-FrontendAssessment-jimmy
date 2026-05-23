<template>
  <div class="flex flex-col lg:flex-row h-screen bg-[#F8FAFC] font-sans text-[#334155] overflow-hidden">
    
    <header class="lg:hidden flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100 shrink-0 z-20">
      <div class="flex items-center gap-2 text-lg font-bold text-[#0F172A] tracking-tight">
        <svg class="w-6 h-6 text-[#0061FE]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.02L5.04 6.49 12 10.96l6.96-4.47L12 2.02zm-6.96 8.94L12 15.43l6.96-4.47-6.96-4.47-6.96 4.47zm0 1.06l6.96 4.47 6.96-4.47v2.12L12 19.68l-6.96-4.47v-2.12z"/>
        </svg>
        Dropbox
      </div>
      <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="w-8 h-8 rounded-lg object-cover">
    </header>

    <aside class="hidden lg:flex w-[240px] bg-white flex-col shrink-0 z-10 relative">
      <div class="h-24 flex items-center px-8 text-xl font-bold text-[#0F172A] tracking-tight gap-3">
        <svg class="w-8 h-8 text-[#0061FE]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.02L5.04 6.49 12 10.96l6.96-4.47L12 2.02zm-6.96 8.94L12 15.43l6.96-4.47-6.96-4.47-6.96 4.47zm0 1.06l6.96 4.47 6.96-4.47v2.12L12 19.68l-6.96-4.47v-2.12z"/>
        </svg>
        Dropbox
      </div>

      <nav class="flex-1 mt-2 space-y-2">
        <button 
          v-for="item in navItems" :key="item.name"
          @click="activeNav = item.name"
          class="w-full flex items-center gap-4 px-8 py-3 transition-colors text-sm font-semibold relative"
          :class="activeNav === item.name ? 'text-[#0061FE]' : 'text-[#64748B] hover:text-[#0F172A]'"
        >
          <div v-if="activeNav === item.name" class="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#0061FE] rounded-r-md"></div>
          <span v-html="item.icon" class="w-5 h-5"></span>
          {{ item.name }}
        </button>
      </nav>

      <div class="p-6 mb-4">
        <div class="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col items-center">
          <div class="w-16 h-14 relative mb-4 mt-2">
            <div class="absolute bottom-0 w-full h-10 bg-[#D9A05B] rounded-md"></div>
            <div class="absolute top-1 left-2 w-12 h-10 bg-[#8BB8F8] rounded-md transform rotate-12 opacity-80"></div>
            <div class="absolute top-2 left-1 w-14 h-10 bg-[#5A9CF8] rounded-md transform -rotate-6"></div>
          </div>
          <div class="w-full text-left">
            <div class="text-[13px] font-bold text-[#0F172A] mb-3">75% In-use</div>
            <div class="w-full bg-[#E2E8F0] rounded-full h-1.5 mb-2">
              <div class="bg-[#0F172A] h-1.5 rounded-full" style="width: 75%"></div>
            </div>
            <div class="flex justify-between text-[11px] font-bold text-[#94A3B8] mb-5">
              <span>600GB</span>
              <span>800GB</span>
            </div>
            <button class="w-full bg-[#0061FE] hover:bg-blue-700 text-white text-[13px] font-bold py-2.5 rounded-xl transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col h-full overflow-hidden relative">
      <header class="flex flex-col lg:flex-row justify-between items-start lg:items-center px-5 lg:px-10 py-5 lg:h-24 shrink-0 gap-4 lg:gap-0 mt-0 lg:mt-4">
        <div class="hidden lg:block">
          <h1 class="text-[26px] font-bold text-[#0F172A] tracking-tight">My Cloud</h1>
          <p class="text-[#64748B] text-[15px] mt-1">Welcome, James Alto! 👋</p>
        </div>
        <div class="lg:hidden w-full">
          <h1 class="text-xl font-bold text-[#0F172A]">My Cloud</h1>
          <p class="text-[#64748B] text-sm">Welcome back, James!</p>
        </div>

        <div class="flex items-center gap-5 w-full lg:w-auto">
          <div class="relative w-full lg:w-[340px]">
            <svg class="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Search anything here" 
              class="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-[13px] font-medium text-[#334155] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-blue-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]"
            >
          </div>
          <button class="hidden lg:block relative text-[#64748B] hover:text-[#0F172A] p-1">
            <svg class="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span class="absolute top-1 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full border border-white"></span>
          </button>
          <button class="hidden lg:block text-[#64748B] hover:text-[#0F172A] p-1">
            <svg class="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </button>
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" class="hidden lg:block w-10 h-10 rounded-[10px] object-cover cursor-pointer ml-2">
        </div>
      </header>

      <div class="flex-1 overflow-y-auto px-5 lg:px-10 pb-20 lg:pb-10">
        
        <section class="mb-8 lg:mb-10">
          <div class="flex justify-between items-center mb-4 lg:mb-6">
            <h2 class="text-lg lg:text-xl font-bold text-[#0F172A]">All files</h2>
            <button class="bg-[#EEF2FF] text-[#0061FE] px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl text-[13px] font-bold hover:bg-blue-100 transition-colors flex items-center gap-1">
              <span>+</span> <span class="hidden lg:inline">Add new</span>
            </button>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div v-for="folder in folders" :key="folder.id" class="bg-white p-4 lg:p-6 rounded-[20px] shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)] border border-white">
              <div class="flex justify-between items-start mb-3 lg:mb-4">
                <div class="w-10 h-10 lg:w-12 lg:h-12 bg-[#EEF2FF] rounded-[12px] lg:rounded-[14px] flex items-center justify-center">
                  <svg class="w-5 h-5 lg:w-6 lg:h-6 text-[#0061FE]" fill="currentColor" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
                </div>
                <button class="text-[#94A3B8] hover:text-[#0F172A]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
              </div>
              
              <h3 class="font-bold text-[#0F172A] text-[14px] lg:text-[15px] mb-1 truncate">{{ folder.name }}</h3>
              <p class="text-[11px] lg:text-[12px] font-medium text-[#94A3B8] mb-4 lg:mb-6 hidden lg:block">{{ folder.date }}</p>
              
              <div class="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-3 lg:gap-0 mt-2 lg:mt-0">
                <div class="hidden lg:block">
                  <div class="text-[11px] text-[#94A3B8] mb-2 font-medium">Shared Users</div>
                  <div class="flex items-center gap-2">
                    <div class="flex -space-x-1.5">
                      <img v-for="(avatar, i) in folder.avatars" :key="i" :src="avatar" class="w-6 h-6 rounded-full border-2 border-white object-cover" />
                    </div>
                    <div v-if="folder.more" class="bg-[#EEF2FF] text-[#0061FE] text-[11px] font-bold px-2 py-1 rounded-[6px]">+{{ folder.more }}</div>
                  </div>
                </div>
                <div class="flex items-center justify-between lg:block w-full lg:w-auto border-t border-slate-50 lg:border-none pt-3 lg:pt-0">
                  <div class="text-[10px] lg:text-[11px] text-[#94A3B8] lg:mb-2 font-medium">Files</div>
                  <div class="bg-[#EEF2FF] text-[#0061FE] text-[11px] lg:text-[12px] font-bold px-2 lg:px-3 py-1 rounded-[6px] lg:rounded-[8px] inline-block">{{ folder.files }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-lg lg:text-xl font-bold text-[#0F172A] mb-4 lg:mb-6">Recent Files</h2>
          
          <div class="hidden lg:block bg-white rounded-[20px] shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)] overflow-hidden pb-4">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[12px] text-[#94A3B8] font-semibold border-b border-slate-100">
                  <th class="px-8 py-5 flex items-center gap-1 font-semibold">Name <span class="text-[10px]">▲</span></th>
                  <th class="px-8 py-5 font-semibold">Shared Users <span class="text-[10px]">▲</span></th>
                  <th class="px-8 py-5 font-semibold">File Size <span class="text-[10px]">▲</span></th>
                  <th class="px-8 py-5 font-semibold">Last Modified <span class="text-[10px]">▲</span></th>
                  <th class="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody class="text-[13px]">
                <tr v-for="file in recentFiles" :key="file.name" class="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                  <td class="px-8 py-4">
                    <div class="flex items-center gap-4">
                      <div :class="file.iconBg" class="w-10 h-10 rounded-[12px] flex items-center justify-center">
                        <span v-html="file.iconSvg" class="w-5 h-5"></span>
                      </div>
                      <span class="font-bold text-[#0061FE]">{{ file.name }}</span>
                    </div>
                  </td>
                  <td class="px-8 py-4">
                     <div class="flex items-center gap-2">
                        <div class="flex -space-x-1.5">
                          <img v-for="(avatar, i) in file.avatars" :key="i" :src="avatar" class="w-6 h-6 rounded-full border-2 border-white object-cover" />
                        </div>
                        <div v-if="file.more" class="bg-[#EEF2FF] text-[#0061FE] text-[11px] font-bold px-2 py-1 rounded-[6px]">+{{ file.more }}</div>
                      </div>
                  </td>
                  <td class="px-8 py-4 font-bold text-[#334155]">{{ file.size }}</td>
                  <td class="px-8 py-4 font-medium text-[#64748B]">{{ file.date }}</td>
                  <td class="px-8 py-4 text-right">
                    <button class="text-[#94A3B8] hover:text-[#0F172A]">
                       <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="lg:hidden bg-white rounded-2xl shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)] flex flex-col">
             <div v-for="file in recentFiles" :key="file.name" class="flex items-center justify-between p-4 border-b border-slate-50 last:border-none active:bg-slate-50 transition-colors">
                <div class="flex items-center gap-3 w-full overflow-hidden">
                  <div :class="file.iconBg" class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <span v-html="file.iconSvg" class="w-6 h-6"></span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-[14px] text-[#0F172A] truncate">{{ file.name }}</div>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-[12px] font-medium text-[#94A3B8]">{{ file.size }}</span>
                      <span class="text-[10px] text-slate-300">•</span>
                      <span class="text-[12px] font-medium text-[#94A3B8]">{{ file.date.split(',')[0] }}</span>
                    </div>
                  </div>
                </div>
                <button class="text-[#94A3B8] p-2 shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
             </div>
          </div>
        </section>
      </div>
    </main>

    <nav class="lg:hidden fixed bottom-0 w-full bg-white border-t border-slate-100 flex justify-around items-center pb-safe pt-2 px-2 z-20">
      <button 
        v-for="item in navItems.slice(0, 4)" :key="item.name"
        @click="activeNav = item.name"
        class="flex flex-col items-center gap-1 p-2 w-16"
        :class="activeNav === item.name ? 'text-[#0061FE]' : 'text-[#94A3B8]'"
      >
        <span v-html="item.icon" class="w-6 h-6"></span>
        <span class="text-[10px] font-semibold">{{ item.name }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeNav = ref('Home')

// SVG Icons
const navItems = [
  { name: 'Home', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>' },
  { name: 'Files', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>' },
  { name: 'Starred', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>' },
  { name: 'Shared', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>' },
  { name: 'Deleted', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>' },
]

const a1 = 'https://i.pravatar.cc/150?img=12'
const a2 = 'https://i.pravatar.cc/150?img=32'
const a3 = 'https://i.pravatar.cc/150?img=41'
const a4 = 'https://i.pravatar.cc/150?img=53'
const a5 = 'https://i.pravatar.cc/150?img=64'

const folders = [
  { id: 1, name: 'Documents', date: 'Sep 25, 2022, 13:25 PM', avatars: [a1,a2,a3,a4], more: 80, files: '3,985' },
  { id: 2, name: 'Music', date: 'Sep 25, 2022, 13:25 PM', avatars: [a3,a4,a5,a1], more: 5, files: '499' },
  { id: 3, name: 'ProjectK', date: 'Sep 25, 2022, 13:25 PM', avatars: [a2,a3,a5], more: null, files: '256' },
  { id: 4, name: 'Rico Media', date: 'Sep 25, 2022, 13:25 PM', avatars: [a4,a1,a2,a3], more: 52, files: '1,225' },
  { id: 5, name: 'New Dev', date: 'Sep 25, 2022, 13:25 PM', avatars: [a5,a2,a1,a4], more: 22, files: '2,265' },
  { id: 6, name: 'Files 2022', date: 'Sep 25, 2022, 13:25 PM', avatars: [a1,a5,a3,a2], more: 12, files: '597' },
]

const recentFiles = [
  { 
    name: 'Website Design.png', avatars: [a1,a2,a3,a4], more: 12, size: '2.8 MB', date: 'Dec 13, 2022',
    iconBg: 'bg-[#FFF3E0] text-[#FB8C00]',
    iconSvg: '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>'
  },
  { 
    name: 'UX-UI.zip', avatars: [a5,a1,a2,a3], more: 5, size: '242 MB', date: 'Dec 12, 2022',
    iconBg: 'bg-[#EEF2FF] text-[#0061FE]',
    iconSvg: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>'
  },
  { 
    name: 'Office.mp4', avatars: [a4,a5], more: null, size: '1.8 GB', date: 'Dec 12, 2022',
    iconBg: 'bg-[#F3E8FF] text-[#A855F7]',
    iconSvg: '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>'
  },
]
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
/* iOS 底部安全距離支援 */
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>