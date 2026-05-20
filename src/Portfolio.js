document.addEventListener('DOMContentLoaded', function () {});

export function initProject() {
  initTabs();
  initCarousel();
}

function initTabs() {
  const tabs = document.querySelectorAll('.tabs ul li');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

let carouselCleanup = null;

function initCarousel() {
  const skillArea = document.getElementById('skill_area');
  const track = document.querySelector('.scroll-indicator-track');
  const thumb = document.querySelector('.scroll-indicator-thumb');

  if (!skillArea || !track || !thumb) return;

  if (carouselCleanup) {
    carouselCleanup();
    carouselCleanup = null;
  }

  let isDragging = false;
  let dragStartX = 0;
  let dragStartThumbLeft = 0;

  const getThumbWidth = () => {
    const trackWidth = track.clientWidth;
    const visibleRatio = skillArea.clientWidth / skillArea.scrollWidth;
    const proportionalWidth = visibleRatio * trackWidth;
    return Math.min(trackWidth * 0.28, Math.max(40, proportionalWidth));
  };

  const updateThumb = () => {
    if (isDragging) return;

    const maxScrollLeft = skillArea.scrollWidth - skillArea.clientWidth;
    const trackWidth = track.clientWidth;

    if (maxScrollLeft <= 0 || trackWidth <= 0) {
      thumb.style.display = 'none';
      return;
    }

    thumb.style.display = 'block';
    const thumbWidth = getThumbWidth();
    const maxThumbLeft = trackWidth - thumbWidth;
    const scrollRatio = skillArea.scrollLeft / maxScrollLeft;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.left = `${scrollRatio * maxThumbLeft}px`;
  };

  const setScrollFromThumbLeft = (thumbLeft) => {
    const maxScrollLeft = skillArea.scrollWidth - skillArea.clientWidth;
    const trackWidth = track.clientWidth;
    const thumbWidth = thumb.offsetWidth;
    const maxThumbLeft = trackWidth - thumbWidth;

    if (maxScrollLeft <= 0 || maxThumbLeft <= 0) return;

    const clampedLeft = Math.max(0, Math.min(maxThumbLeft, thumbLeft));
    thumb.style.left = `${clampedLeft}px`;
    skillArea.scrollLeft = (clampedLeft / maxThumbLeft) * maxScrollLeft;
  };

  const onDragMove = (clientX) => {
    const deltaX = clientX - dragStartX;
    setScrollFromThumbLeft(dragStartThumbLeft + deltaX);
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    thumb.classList.remove('is-dragging');
    skillArea.style.scrollBehavior = '';
    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.removeEventListener('mouseup', onDocumentMouseUp);
    document.removeEventListener('touchmove', onDocumentTouchMove);
    document.removeEventListener('touchend', onDocumentTouchEnd);
    document.removeEventListener('touchcancel', onDocumentTouchEnd);
    updateThumb();
  };

  const onDocumentMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    onDragMove(e.clientX);
  };

  const onDocumentMouseUp = () => {
    endDrag();
  };

  const onDocumentTouchMove = (e) => {
    if (!isDragging || !e.touches[0]) return;
    e.preventDefault();
    onDragMove(e.touches[0].clientX);
  };

  const onDocumentTouchEnd = () => {
    endDrag();
  };

  const startDrag = (clientX) => {
    isDragging = true;
    dragStartX = clientX;
    dragStartThumbLeft = parseFloat(thumb.style.left) || 0;
    thumb.classList.add('is-dragging');
    skillArea.style.scrollBehavior = 'auto';
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mouseup', onDocumentMouseUp);
    document.addEventListener('touchmove', onDocumentTouchMove, { passive: false });
    document.addEventListener('touchend', onDocumentTouchEnd);
    document.addEventListener('touchcancel', onDocumentTouchEnd);
  };

  const onThumbMouseDown = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    startDrag(e.clientX);
  };

  const onThumbTouchStart = (e) => {
    if (!e.touches[0]) return;
    e.stopPropagation();
    startDrag(e.touches[0].clientX);
  };

  const onTrackMouseDown = (e) => {
    if (e.target === thumb || e.button !== 0) return;

    const maxScrollLeft = skillArea.scrollWidth - skillArea.clientWidth;
    if (maxScrollLeft <= 0) return;

    const rect = track.getBoundingClientRect();
    const thumbWidth = thumb.offsetWidth || getThumbWidth();
    const clickX = e.clientX - rect.left - thumbWidth / 2;
    setScrollFromThumbLeft(clickX);
  };

  const onImagesLoaded = () => {
    updateThumb();
  };

  skillArea.addEventListener('scroll', updateThumb);
  thumb.addEventListener('mousedown', onThumbMouseDown);
  thumb.addEventListener('touchstart', onThumbTouchStart, { passive: true });
  track.addEventListener('mousedown', onTrackMouseDown);
  window.addEventListener('resize', updateThumb);

  skillArea.querySelectorAll('img').forEach((img) => {
    if (img.complete) return;
    img.addEventListener('load', onImagesLoaded);
    img.addEventListener('error', onImagesLoaded);
  });

  updateThumb();
  requestAnimationFrame(updateThumb);

  carouselCleanup = () => {
    endDrag();
    skillArea.removeEventListener('scroll', updateThumb);
    thumb.removeEventListener('mousedown', onThumbMouseDown);
    thumb.removeEventListener('touchstart', onThumbTouchStart);
    track.removeEventListener('mousedown', onTrackMouseDown);
    window.removeEventListener('resize', updateThumb);
    skillArea.querySelectorAll('img').forEach((img) => {
      img.removeEventListener('load', onImagesLoaded);
      img.removeEventListener('error', onImagesLoaded);
    });
  };
}

export function updateCarousel() {
  setTimeout(initCarousel, 50);
}
