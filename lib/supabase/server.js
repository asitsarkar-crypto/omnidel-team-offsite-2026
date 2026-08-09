/**
 * Supabase server client — null-safe when env is missing.
 *
 * TODO(ops): Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
 */

let clientPromise = null;

export function supabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function getSupabaseAdmin() {
  if (!supabaseConfigured()) return null;
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false, autoRefreshToken: false },
      }),
    );
  }
  return clientPromise;
}

/** Ephemeral in-process store for pledge mode (dev / pre-credentials). */
const memoryStore = {
  donations: [],
  transactions: [],
  spaceApplications: [],
};

export function memoryLogDonation(record) {
  memoryStore.donations.unshift(record);
  if (memoryStore.donations.length > 200) memoryStore.donations.length = 200;
  return record;
}

export function memoryLogTransaction(record) {
  memoryStore.transactions.unshift(record);
  if (memoryStore.transactions.length > 200) memoryStore.transactions.length = 200;
  return record;
}

export function memoryListDonations() {
  return memoryStore.donations;
}

export function memoryLogSpaceApplication(record) {
  memoryStore.spaceApplications.unshift(record);
  if (memoryStore.spaceApplications.length > 200) memoryStore.spaceApplications.length = 200;
  return record;
}

export function memoryListSpaceApplications() {
  return memoryStore.spaceApplications;
}

export function memoryGetSpaceApplication(publicId) {
  return memoryStore.spaceApplications.find((row) => row.public_id === publicId) || null;
}
