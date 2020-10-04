/* eslint dot-notation:0 */
import Vue from 'vue'
import { config, RouterLinkStub } from '@vue/test-utils'

Vue.config.silent = true

config.stubs['nuxt-link'] = RouterLinkStub
config.stubs['fa'] = { template: '<span><slot /></span>' }
