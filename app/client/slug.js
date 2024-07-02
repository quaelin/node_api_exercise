export const slug = (petition) => {
    return petition.title.toLowerCase().replaceAll(' ', '-');
};
