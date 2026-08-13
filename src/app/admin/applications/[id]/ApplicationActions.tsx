"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  applicationStatuses,
  type ApplicationStatus,
} from "@/lib/applicationStatus";
import { statusLabels } from "../../statusStyles";

type ApplicationActionsProps = {
  applicationId: string;
  status: ApplicationStatus;
  notes: string;
};

export function ApplicationActions({
  applicationId,
  status,
  notes: initialNotes,
}: ApplicationActionsProps) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [notes, setNotes] = useState(initialNotes);
  const [notesSaved, setNotesSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function patch(body: { status?: ApplicationStatus; notes?: string }) {
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      router.refresh();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Permanently delete this application and its CV file? This cannot be undone.",
    );
    if (!confirmed) {
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      router.push("/admin/applications");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
      setBusy(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[12px] uppercase tracking-[0.15em] text-gray-600 mb-3">
          Status
        </h2>
        <div className="flex flex-wrap gap-2">
          {applicationStatuses.map((candidate) => (
            <button
              key={candidate}
              type="button"
              disabled={busy || candidate === status}
              onClick={() => patch({ status: candidate })}
              className={`rounded-full border px-4 py-1.5 text-[13px] transition-colors disabled:cursor-default ${
                candidate === status
                  ? "border-white/60 text-white"
                  : "border-white/[0.1] text-gray-500 hover:text-white disabled:opacity-40"
              }`}
            >
              {statusLabels[candidate]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[12px] uppercase tracking-[0.15em] text-gray-600 mb-3">
          Private notes
        </h2>
        <textarea
          value={notes}
          onChange={(event) => {
            setNotes(event.target.value);
            setNotesSaved(false);
          }}
          rows={5}
          className="w-full rounded-lg border border-white/[0.1] bg-white/[0.02] p-4 text-[14px] text-white focus:border-white/30 focus:outline-none"
          placeholder="Screening impressions, interview feedback..."
        />
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            disabled={busy || notes === initialNotes}
            onClick={async () => {
              const ok = await patch({ notes });
              if (ok) {
                setNotesSaved(true);
              }
            }}
            className="rounded-full bg-white px-5 py-2 text-[13px] font-medium text-black hover:bg-gray-200 transition-colors disabled:opacity-40"
          >
            Save notes
          </button>
          {notesSaved && <span className="text-[13px] text-gray-500">Saved.</span>}
        </div>
      </div>

      <div className="border-t border-white/[0.08] pt-6">
        <button
          type="button"
          disabled={busy}
          onClick={handleDelete}
          className="rounded-full border border-red-500/40 px-5 py-2 text-[13px] text-red-400 hover:border-red-400 hover:text-red-300 transition-colors disabled:opacity-40"
        >
          Delete application
        </button>
        <p className="mt-2 text-[12px] text-gray-600">
          Removes the database record and the CV file. Use for GDPR erasure
          requests too.
        </p>
      </div>

      {error && (
        <p className="text-[13px] text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
