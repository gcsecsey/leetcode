/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let prevVersion = 1,
      nextVersion = n;

    // 1. find first good version with binary search
    while (prevVersion < nextVersion) {
      const curr = prevVersion + Math.floor((nextVersion - prevVersion) / 2);
      if (isBadVersion(curr)) {
        // bad -> should check below
        nextVersion = curr - 1;
      } else {
        // good -> should check above
        prevVersion = curr + 1;
      }
    }

    // 2. return first bad version
    if (isBadVersion(prevVersion)) {
      return prevVersion;
    }
    return prevVersion + 1;
  };
};
