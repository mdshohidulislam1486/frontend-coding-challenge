import React from 'react';
import { UserAgentProvider } from './userAgentProvider';
import { userAgent as getUserAgent } from 'next/server';
import { headers } from 'next/headers';

export const Providers: React.FC<{
  children: React.ReactNode;
  userAgent?: string;
}> = ({ children }) => {
  const { ua } = getUserAgent({ headers: headers() });
  return <UserAgentProvider userAgent={ua}>{children}</UserAgentProvider>;
};
