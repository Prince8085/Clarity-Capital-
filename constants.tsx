import React from 'react';
import type { EconomicEvent, PortfolioHolding, OptionData } from './types';
import { Type } from "@google/genai";

export const INDIAN_STOCKS = ['NIFTY 50', 'RELIANCE', 'TCS', 'HDFCBANK', 'INFY', 'ICICIBANK', 'HINDUNILVR', 'BAJFINANCE'];

export const MOCK_PRICE_DATA: { [key: string]: any[] } = {
  'NIFTY 50': [...Array(30)].map((_, i) => ({
    date: `Day ${i + 1}`,
    price: 23500 + (Math.random() - 0.5) * 500 + i * 15,
    volume: 100000000 + Math.random() * 50000000,
  })),
  'RELIANCE': [...Array(30)].map((_, i) => ({
    date: `Day ${i + 1}`,
    price: 2900 + (Math.random() - 0.5) * 200 + i * 5,
    volume: 5000000 + Math.random() * 2000000,
  })),
  // ... other stocks
};

export const MOCK_OPTION_CHAIN_DATA: OptionData[] = [
    { strike: 23400, calls: { iv: 12.5, oi: '1.2M', volume: '800k', ltp: 250.5, delta: 0.76, gamma: 0.01, theta: -4.8, vega: 1.5 }, puts: { iv: 14.8, oi: '1.5M', volume: '950k', ltp: 80.2, delta: -0.24, gamma: 0.01, theta: -3.9, vega: 1.5 } },
    { strike: 23450, calls: { iv: 12.2, oi: '1.1M', volume: '750k', ltp: 210.8, delta: 0.68, gamma: 0.02, theta: -5.1, vega: 1.8 }, puts: { iv: 15.1, oi: '1.6M', volume: '1.1M', ltp: 105.4, delta: -0.32, gamma: 0.02, theta: -4.2, vega: 1.8 } },
    { strike: 23500, calls: { iv: 11.9, oi: '2.5M', volume: '1.8M', ltp: 175.1, delta: 0.52, gamma: 0.03, theta: -5.5, vega: 2.1 }, puts: { iv: 15.5, oi: '2.2M', volume: '1.5M', ltp: 135.9, delta: -0.48, gamma: 0.03, theta: -4.6, vega: 2.1 } },
    { strike: 23550, calls: { iv: 11.6, oi: '1.8M', volume: '1.2M', ltp: 140.3, delta: 0.38, gamma: 0.02, theta: -5.2, vega: 1.9 }, puts: { iv: 15.9, oi: '1.9M', volume: '1.3M', ltp: 170.7, delta: -0.62, gamma: 0.02, theta: -4.9, vega: 1.9 } },
    { strike: 23600, calls: { iv: 11.3, oi: '1.5M', volume: '900k', ltp: 110.6, delta: 0.29, gamma: 0.01, theta: -4.9, vega: 1.6 }, puts: { iv: 16.2, oi: '1.4M', volume: '850k', ltp: 210.1, delta: -0.71, gamma: 0.01, theta: -5.3, vega: 1.6 } },
];

export const ICONS = {
    dashboard: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    confluence: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-12 0v2" /></svg>,
    hub: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    pulse: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h2l2.5-5L10 17l2.5-10L15 12h2"/></svg>,
    chart: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" /></svg>,
    options: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>,
    optionsAI: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-4.879-4.879L4 4m10.121 10.121a7 7 0 100-9.898 7 7 0 000 9.898zM14 14l2-2-2-2m-4-4l-2 2 2 2" /></svg>,
    brain: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    logo: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    search: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    liquidity: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    scalping: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    menu: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>,
    close: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
    alerts: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    settings: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    portfolio: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    sun: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    moon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
    history: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

export const CREATOR_IMAGE_BASE64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAJQAwgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK-";

const liveSignalResponseSchema = {
    type: Type.OBJECT,
    properties: {
        signal: { type: 'STRING', enum: ['BUY', 'SELL', 'HOLD'] },
        confidence: { type: 'NUMBER' },
        strategy: { type: 'STRING' },
        premiumRange: { type: 'STRING' },
        entry: { type: 'STRING' },
        stopLoss: { type: 'STRING' },
        riskRewardRatio: { type: 'STRING' },
        targets: {
            type: 'ARRAY',
            items: { type: 'STRING' }
        },
        rationale: { type: 'STRING' },
        confluence: {
            type: 'OBJECT',
            properties: {
                priceAction: { type: 'STRING', enum: ['Bullish', 'Bearish', 'Neutral'] },
                optionChain: { type: 'STRING', enum: ['Bullish', 'Bearish', 'Neutral'] },
                orderFlow: { type: 'STRING', enum: ['Bullish', 'Bearish', 'Neutral'] },
                sentiment: { type: 'STRING', enum: ['Bullish', 'Bearish', 'Neutral'] },
            },
            required: ['priceAction', 'optionChain', 'orderFlow', 'sentiment']
        }
    },
    required: ['signal', 'confidence', 'strategy', 'premiumRange', 'entry', 'stopLoss', 'targets', 'rationale', 'confluence', 'riskRewardRatio']
};

const synthesizedSignalResponseSchema = {
    type: Type.OBJECT,
    properties: {
        signal: { type: 'STRING', enum: ['BUY', 'SELL', 'HOLD', 'INCONCLUSIVE'] },
        confidence: { type: 'NUMBER' },
        tradePlan: { type: 'STRING' },
        rationale: { type: 'STRING' },
        risks: { type: 'STRING' },
    },
    required: ['signal', 'confidence', 'tradePlan', 'rationale', 'risks']
};

export const GEMINI_PROMPTS = {
    liveConfluenceSignalGeneration: (marketData: string) => `
        You are a highly advanced AI trading engine for the NIFTY 50 index. Your goal is to analyze multiple data points to find confluence and generate a single, high-confidence trading signal.

        **Current Market Snapshot:**
        ${marketData}

        **Your Task:**
        1.  **Analyze Confluence:** Evaluate each piece of the snapshot (Price Action, Option Chain, Order Flow, Sentiment).
        2.  **Determine Signal:** Based on the confluence, decide the master signal: 'BUY', 'SELL', or 'HOLD'.
        3.  **Generate Trade Plan:** If the signal is 'BUY' or 'SELL', create a complete trade plan. If 'HOLD', these fields should be descriptive (e.g., "N/A"). Include a clear Risk/Reward ratio based on the entry, stop-loss, and primary target.
        4.  **Confidence Score:** Assign a confidence score (0-100) based on how many factors align.
        5.  **Rationale:** Briefly explain the reasoning.
        6.  **Output JSON:** You MUST return ONLY a single, valid JSON object matching the provided schema. The 'targets' field must be an array of strings.
    `,
    synthesizeConfluenceAnalysis: (evidence: string) => `
        You are a master trading strategist. Your task is to synthesize multiple, potentially conflicting, analysis reports into a single, cohesive, and actionable trade plan.
        You have received the following analysis inputs from various specialized AI tools:

        --- BEGIN EVIDENCE ---
        ${evidence}
        --- END EVIDENCE ---

        **Your Task:**
        1.  **Synthesize:** Review all pieces of evidence. Identify points of confluence (agreement) and divergence (disagreement).
        2.  **Determine Final Signal:** Based on the weight of the evidence, determine a final signal: 'BUY', 'SELL', or 'HOLD'. If the evidence is too conflicting or weak, signal 'INCONCLUSIVE'.
        3.  **Calculate Confidence:** Assign a confidence score (0-100) based on how strongly the evidence aligns. High alignment = high confidence. Conflicting evidence = low confidence.
        4.  **Create Master Trade Plan:** Formulate a detailed trade plan. This must include specific entry points, stop-loss levels, and profit targets.
        5.  **Provide Rationale:** Clearly explain WHY you arrived at this conclusion, referencing the specific pieces of evidence that were most influential.
        6.  **Identify Risks:** Outline the primary risks and what could invalidate this trade idea.
        7.  **Output JSON:** You MUST return ONLY a single, valid JSON object matching the provided schema. Do not include any other text, explanations, or markdown.
    `,
    stockAnalysis: (stockSymbol: string) => `
        You are a senior stock market analyst. Provide a concise yet detailed analysis for ${stockSymbol} based on the latest available public information. Structure your response with the following tags, each on a new line:
        [OVERVIEW] A brief summary of the company's business and recent performance.
        [NEWS] Summarize 2-3 key recent news items or developments.
        [SENTIMENT] State the overall market sentiment for this stock: Bullish, Bearish, or Neutral.
        [LEVELS] Identify the key support and resistance levels based on recent price action.
    `,
    chartAnalysis: `
        You are an expert in Smart Money Concepts (SMC) and technical analysis. Analyze the provided chart image. Your goal is to identify potential trade setups based on SMC principles like market structure, liquidity, and order blocks. Provide a concise summary with these tags:
        Summary: [Your overall reading of the chart]
        Market Structure: [e.g., Bullish, Bearish, MSB, CHoCH]
        Liquidity: [Identify key buyside/sellside liquidity pools]
        Key Zones: [Point out important Order Blocks or FVGs]
        Trade Idea: [A hypothetical trade idea with entry, SL, and TP]
    `,
    optionChainAnalysis: `
        You are an expert options strategist. Analyze the provided option chain image and provide a detailed strategic breakdown. Your analysis must be structured with the following tags, each on a new line:
        [SUMMARY] Brief overview of the current sentiment (e.g., Bullish, Bearish, Neutral, Range-bound).
        [KEY_LEVELS] Identify the primary support and resistance levels based on the highest Call and Put OI. State the specific strike prices.
        [OI_ANALYSIS] Detail the meaning of the OI distribution. Where is the "max pain"? Where are positions being built or unwound?
        [IV_INSIGHTS] Comment on the Implied Volatility (IV). Is it high or low? What does this suggest about expected future movement?
        [POTENTIAL_STRATEGIES] Suggest 1-2 potential option strategies that fit the current analysis (e.g., Bull Call Spread, Iron Condor). Briefly explain the rationale.
        [RISK_WARNING] Include a mandatory disclaimer about the risks of options trading.
    `,
    liquidityHunterAnalysis: `
        You are an expert in Smart Money Concepts (SMC). Analyze the provided chart image for liquidity zones. Structure your response with the following tags, each on a new line:
        [MARKET_STRUCTURE] Describe the current market structure (e.g., Bullish break of structure, Bearish change of character).
        [BUYSIDE_LIQUIDITY] Identify key levels where buyside liquidity (BSL) likely rests (e.g., equal highs, recent swing highs).
        [SELLSIDE_LIQUIDITY] Identify key levels where sellside liquidity (SSL) likely rests (e.g., equal lows, recent swing lows).
        [KEY_ZONES] Point out any significant Order Blocks (OB) or Fair Value Gaps (FVG) that could act as points of interest.
        [ANTICIPATED_MOVE] Based on the above, describe the most probable short-term move. Where is the price likely to "hunt" for liquidity?
    `,
    scalpersEdgeAnalysis: `
        You are a high-frequency trading analyst specializing in scalping. Analyze the provided short-term chart (1-5 min) for immediate opportunities. Your response must be concise and actionable. Use the following tags, each on a new line:
        [CURRENT_BIAS] State the immediate bias in one word: Bullish, Bearish, or Ranging.
        [MICRO_STRUCTURE] Briefly describe the most recent micro-structure event (e.g., "Broke immediate high at 23555", "Failed to hold support at 23540").
        [IMMEDIATE_INTEREST] What is the single most important price level to watch in the next 1-3 candles?
        [ACTIONABLE_IDEA] Provide a single, clear, and hypothetical trade idea for the immediate future. Include a trigger, a tight stop-loss, and a target. Example: "Look for long if 23555 holds. SL at 23548. Target 23565."
        [RISK_NOTE] Add a mandatory note: "Scalping is high-risk. This is a hypothetical idea, not financial advice."
    `,
    marketNews: `
        You are a financial news editor for the Indian market. Provide a summary of the top 3 most impactful market news stories from today. Your output MUST be a JSON array where each object has "headline" and "summary" keys.
    `,
    futureProjection: (stockSymbol: string) => `
        You are an AI market analyst providing an experimental probabilistic forecast. Based on the current technical and fundamental data for ${stockSymbol}, outline a probable scenario for the next 3 months. Structure your response with these points:
        1. Bull Case: [Describe the potential positive scenario and what could cause it]
        2. Bear Case: [Describe the potential negative scenario and what could cause it]
        3. Most Likely Path: [Describe the most probable outcome based on current data]
        Include a disclaimer that this is a speculative projection, not financial advice.
    `
};

(GEMINI_PROMPTS as any).liveSignalResponseSchema = liveSignalResponseSchema;
(GEMINI_PROMPTS as any).synthesizedSignalResponseSchema = synthesizedSignalResponseSchema;

export const MOCK_ECONOMIC_CALENDAR: EconomicEvent[] = [
    { date: 'July 28, 2024', event: 'India Inflation Rate YoY', impact: 'High' },
    { date: 'July 30, 2024', event: 'India Infrastructure Output', impact: 'Medium' },
    { date: 'Aug 01, 2024', event: 'Manufacturing PMI', impact: 'High' },
];
// ... and so on
export const MOCK_MARKET_DATA = {
    indices: [
        { name: 'NIFTY 50', value: 23567.00, change: 183.45, changePercent: 0.78 },
        { name: 'SENSEX', value: 77301.14, change: 599.34, changePercent: 0.77 },
        { name: 'NIFTY BANK', value: 51703.95, change: -56.30, changePercent: -0.11 },
    ],
    movers: {
        gainers: [
            { name: 'ADANIPORTS', price: 1470.10, changePercent: 3.15 },
            { name: 'POWERGRID', price: 335.50, changePercent: 2.85 },
            { name: 'WIPRO', price: 495.20, changePercent: 2.51 },
        ],
        losers: [
            { name: 'HDFCLIFE', price: 580.00, changePercent: -1.80 },
            { name: 'M&M', price: 2905.00, changePercent: -1.55 },
            { name: 'HCLTECH', price: 1445.00, changePercent: -1.25 },
        ],
    },
    sectors: [
        { name: 'IT', changePercent: 1.8 },
        { name: 'FMCG', changePercent: 0.9 },
        { name: 'Realty', changePercent: 2.5 },
        { name: 'Auto', changePercent: -0.7 },
        { name: 'Metal', changePercent: 1.2 },
        { name: 'Pharma', changePercent: 0.3 },
    ],
};

export const MOCK_PORTFOLIO_HOLDINGS: PortfolioHolding[] = [
    { id: '1', symbol: 'RELIANCE', quantity: 50, avgPrice: 2850.50, ltp: 2910.75 },
    { id: '2', symbol: 'TCS', quantity: 100, avgPrice: 3800.00, ltp: 3845.20 },
    { id: '3', symbol: 'HDFCBANK', quantity: 200, avgPrice: 1680.25, ltp: 1650.10 },
    { id: '4', symbol: 'INFY', quantity: 150, avgPrice: 1600.70, ltp: 1635.00 },
];

export const MOCK_HEATMAP_DATA = [
    { name: 'ADANIENT', sector: 'Misc', change: 2.5 },
    { name: 'APOLLOHOSP', sector: 'Healthcare', change: -0.8 },
    { name: 'ASIANPAINT', sector: 'Materials', change: 1.2 },
    { name: 'BAJFINANCE', sector: 'Financials', change: 3.1 },
    { name: 'BHARTIARTL', sector: 'Telecom', change: -1.5 },
    { name: 'HDFCBANK', sector: 'Financials', change: -2.1 },
    { name: 'INFY', sector: 'IT', change: 1.8 },
    { name: 'RELIANCE', sector: 'Energy', change: 0.5 },
    { name: 'TCS', sector: 'IT', change: 2.2 },
    { name: 'TITAN', sector: 'Consumer', change: -0.2 },
];

export const MOCK_SENTIMENT_TREND_DATA = [
    { date: 'Day 1', score: 65 },
    { date: 'Day 2', score: 68 },
    { date: 'Day 3', score: 62 },
    { date: 'Day 4', score: 75 },
    { date: 'Day 5', score: 72 },
    { date: 'Day 6', score: 80 },
    { date: 'Day 7', score: 78 },
];